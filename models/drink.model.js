import { model, Schema } from 'mongoose';

const drinkSchena = new Schema(
  {
    name: { type: String, require: true, trim: true },
    price: { type: Number, require: true },
    description: { type: String, trim: true },
    img: { type: String, default: '' },
    stock: { type: Number, default: 0, require: true },
    size: { type: String, require: true},
    // Relacion con la Schema de Category
    category: [
      {
        ref: 'Category',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export default model('Drink', drinkSchena);
