import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

const Search = mongoose.model('Cat', catSchema);

export default Search;
