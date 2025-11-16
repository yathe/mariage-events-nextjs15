import { Document, Schema, model, models, Types } from 'mongoose';
import Event from './event.model';

// TypeScript interface for Booking document
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema definition
const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: (email: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        },
        message: 'Please provide a valid email address'
      }
    }
  },
  {
    timestamps: true // Enable automatic createdAt and updatedAt
  }
);

// Pre-save hook to validate referenced event exists
BookingSchema.pre('save', async function(next) {
  const booking = this as IBooking;
    // Only validate eventId if it's new or modified
    if(booking.isModified('eventId') || booking.isNew){
      try {
        const eventExists = await Event.findById(booking.eventId).select('_id');
        if (!eventExists) {
          const error = new Error(`Event with ID ${booking.eventId} does not exi`);
          error.name = 'ValidationError';
          return next(error);
        }
  } catch {
    const ValidationError = new Error('Invalid event ID format or database error');
    ValidationError.name = 'ValidationError';
    return next(ValidationError);
  }
}
next();
});

// Add index on eventId for optimized query performance
BookingSchema.index({ eventId: 1 });

// Create compound index for common queries ( event bookings by date)
BookingSchema.index({ eventId: 1 ,createdAt:-1 });

// Create index on email for user bookings lookups
BookingSchema.index({email: 1});

const Booking = models.Booking || model<IBooking>('Booking', BookingSchema);

export default Booking;