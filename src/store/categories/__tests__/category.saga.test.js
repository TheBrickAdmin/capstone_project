import { call } from "typed-redux-saga";
import { testSaga } from "redux-saga-test-plan";

import {
  TextDecoder as ImportedTextDecoder,
  TextEncoder as ImportedTextEncoder,
} from "util";
Object.assign(global, {
  TextDecoder: ImportedTextDecoder,
  TextEncoder: ImportedTextEncoder,
});

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";

describe("category sagas", () => {
  test("categoriesSage", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });
});
