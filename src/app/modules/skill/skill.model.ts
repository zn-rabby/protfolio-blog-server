import { model, Schema } from 'mongoose';
import { ISkill } from './skill.interface';
import {
  excludeDeletedAggregation,
  excludeDeletedQuery,
} from '../../utils/queryFilter';

const skillSchema = new Schema<ISkill>(
  {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// query middleware for soft delete by utils
skillSchema.pre('find', excludeDeletedQuery);
skillSchema.pre('findOne', excludeDeletedQuery);

// aggregate middleware for soft delete by utils
skillSchema.pre('aggregate', excludeDeletedAggregation);

export const Skill = model<ISkill>('Skill', skillSchema);
