# @neoncitylights/series

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm (scoped)](https://img.shields.io/npm/v/@neoncitylights/series?style=flat-square)](https://www.npmjs.com/package/@neoncitylights/series)
[![Codecov](https://img.shields.io/codecov/c/github/neoncitylights/ts-series?style=flat-square&logo=codecov&logoColor=%23fff)](https://codecov.io/gh/neoncitylights/ts-series)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/neoncitylights/ts-series/.github%2Fworkflows%2Fci.yml?style=flat-square)](https://github.com/neoncitylights/ts-series/actions/workflows/ci.yml)

A TypeScript math library for working with progressions and series.

## Install

```bash
npm install @neoncitylights/series
```

## Documentation
[Auto-generated API documentation is available](https://neoncitylights.github.io/ts-series/).

There are 3 types of a progression in math:
  - **Arithmetic progression**: A sequence of numbers where the consecutive difference between each term is a constant. E.g., an arithmetic progression of 5 numbers, with 2 as the common difference, starting at 1:
$$1, 3, 5, 7, 9$$
  - **Geometric progression**: A sequence of numbers where there is a common ratio between each term. That ratio is found by multiplying the previous term by a non-zero number.  E.g., a geometric progression of 6 numbers, with 2 as the common ratio, starting at 5:
$$5, 10, 20, 40, 80, 160$$
  - **Harmonic progression**: A sequence of numbers where each term is the harmonic mean of its previous term and next term. E.g., a harmonic progression of 6 numbers, with 2 as the scaling value, starting at 1:
$$1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, \frac{1}{6}$$

### API
#### Generators
 * `fn`: <a href="#newArithmeticProgression">#</a> generators.**newArithmeticProgression**(*startNumber*, *length*, *step*): *number[]* • [source](./src/generators.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#newArithmeticProgression)
 * `fn`: <a href="#newGeometricProgression">#</a> generators.**newGeometricProgression**(*startNumber*, *length*, *scale*): *number[]* • [source](./src/generators.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#newGeometricProgression)
 * `fn`: <a href="#newHarmonicProgression">#</a> generators.**newHarmonicProgression**(*startNumber*, *length*, *scale*): *number[]* • [source](./src/generators.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#newHarmonicProgression)
#### Predicates
 * `fn`: <a href="#isArithmeticProgression">#</a> predicates.**isArithmeticProgression**(*numbers*): *ProgressionResult* • [source](./src/predicates.ts), [docs](https://neoncitylights.io/ts-series/modules.html#isArithmeticProgression)
 * `fn`: <a href="#isGeometricProgression">#</a> predicates.**isGeometricProgression**(*numbers*): *ProgressionResult* • [source](./src/predicates.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#isGeometricProgression)
 * `fn`: <a href="#isHarmonicProgression">#</a> predicates.**isHarmonicProgression**(*numbers*): *ProgressionResult* • [source](./src/predicates.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#isHarmonicProgression)

#### Totals (sums and products)
 * `fn`: <a href="#getProductFromArray">#</a> total.**getProductFromArray**(*factors*, *lambda*): number • [source](./src/total.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#getProductFromArray)
 * `fn`: <a href="#getProductFromBounds">#</a> total.**getProductFromBounds**(*lower*, *upper*, *lambda*): number • [source](./src/total.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#getProductFromBounds)
 * `fn`: <a href="#getSumFromArray">#</a> total.**getSumFromArray**(*summands*, *lambda*): number • [source](./src/total.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#getSumFromArray)
 * `fn`: <a href="#getSumFromBounds">#</a> total.**getSumFromBounds**(*lower*, *upper*, *lambda*): number • [source](./src/total.ts), [docs](https://neoncitylights.github.io/ts-series/modules.html#getSumFromBounds)
<details>
<summary><h4>Constants</h4></summary>

There are constants for certain music intervals that can be used coincide with the generator functions.

* `C`: <a href="#minorSecond">#</a> MinorSecond
* `C`: <a href="#majorSecond">#</a> MajorSecond
* `C`: <a href="#minorThird">#</a> MinorThird
* `C`: <a href="#majorThird">#</a> MajorThird
* `C`: <a href="#perfectThird">#</a> PerfectThird
* `C`: <a href="#augmentedFourth">#</a> AugmentedFourth
* `C`: <a href="#perfectFifth">#</a> PerfectFifth
* `C`: <a href="#goldenRatio">#</a> GoldenRatio
* `C`: <a href="#majorSixth">#</a> MajorSixth
* `C`: <a href="#majorSeventh">#</a> MajorSeventh
* `C`: <a href="#emptySum">#</a> EmptySum
* `C`: <a href="#emptyProduct">#</a> EmptyProduct
</details>

## Examples

### Convergent series

Given a length of an arbitrarily large number, we can prove, model, and visualize convergent series; that is, the sum of an infinite sequence resulting in a finite number.

We can use `newArithmeticProgression` to find the sequence of summands, and `getSumFromArray()` for passing in the summands for the sum; we can also only use `getSumFromBounds()` to find the sum.

For example:
```ts
const ARBITRARILY_LARGE_LIMIT = 500;
getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => (Math.pow(-1, n+1)/Math.pow(2, n)));
// absolute alternating convergence
// 1/2 − 1/4 + 1/8 − 1/16 + ⋯ = 0.3333333333333333 (1/3)

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => (1/Math.pow(4,n)));
// 1/4 + 1/16 + 1/64 + 1/256 + ⋯ = 0.3333333333333333 (1/3)

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => Math.pow(1/2, n));
// 1/2 + 1/4 + 1/8 + 1/16 + ⋯ = 1

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => 1/(n * (n-1)));
// 1/2 + 1/4 + 1/6 + 1/12 + 1/20 + 1/30 + ⋯ = 0

const riemannZeta = (s: number, limit: ABSOLUTELY_LARGE_LIMIT) => {
  getSumFromBounds(1, n, (n) => 1/(n ** s));
}
```

### Typographic scales

This library can be used to generate a typography scale for web projects.

For example, to generate a scale on a major second where the base font size is `16px`:
```ts
newGeometricProgression(16, 6, MajorSecond).map(n => `${n.toFixed(3)}px`);
// ["16.000px", "18.000px", "20.250px", "22.781px", "25.629px", "28.833px"]
```

These floating points aren't easy to remember, so we have the option to modify this scale by rounding each value:
```ts
newGeometricProgression(16, 6, MajorSecond).map(n => `${Math.round(n)}px`);
// ["16px", "18px", "20px", "23px", "26px", "29px"]
```

## License

This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
