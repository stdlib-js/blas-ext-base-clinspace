<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# clinspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a single-precision complex floating-point strided array with linearly spaced values over a specified interval.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-clinspace
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var clinspace = require( '@stdlib/blas-ext-base-clinspace' );
```

#### clinspace( N, start, stop, endpoint, x, strideX )

Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var strt = new Complex64( 0.0, 0.0 );
var stp = new Complex64( 4.0, 2.0 );

clinspace( x.length, strt, stp, true, x, 1 );
// x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **start**: start of interval.
-   **stop**: end of interval.
-   **endpoint**: boolean indicating whether to include the `stop` value when writing values to the input array. If `true`, the input array is filled with evenly spaced values over the closed interval `[start, stop]`. If `false`, the input array is filled with evenly spaced values over the half-open interval `[start, stop)`.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var strt = new Complex64( 1.0, 0.0 );
var stp = new Complex64( 3.0, 2.0 );

clinspace( 2, strt, stp, true, x, 2 );
// x => <Complex64Array>[ 1.0, 0.0, 0.0, 0.0, 3.0, 2.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

// Initial array...
var x0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create an offset view...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
var strt = new Complex64( 1.0, 0.0 );
var stp = new Complex64( 3.0, 2.0 );

clinspace( 2, strt, stp, true, x1, 2 );
// x0 => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 3.0, 2.0, 0.0, 0.0 ]
```

#### clinspace.ndarray( N, start, stop, endpoint, x, strideX, offsetX )

Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var strt = new Complex64( 0.0, 0.0 );
var stp = new Complex64( 4.0, 2.0 );

clinspace.ndarray( x.length, strt, stp, true, x, 1, 0 );
// x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last two elements:

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var strt = new Complex64( 1.0, 0.0 );
var stp = new Complex64( 3.0, 2.0 );

clinspace.ndarray( 2, strt, stp, true, x, 1, x.length-2 );
// x => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 3.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The real and imaginary components are interpolated independently.

-   Let `M` be the number of generated values (which is either `N` or `N+1` depending on whether `endpoint` is `true` or `false`, respectively). Given `start = a + bi` and `stop = c + di`, the spacing for each component is

    ```text
    Δ_re = (c - a) / (M - 1)
    Δ_im = (d - b) / (M - 1)
    ```

-   When the number of generated values is greater than `1` and `endpoint` is `true`, the set of values written to a provided input array is guaranteed to include the `start` and `stop` values. Beware, however, that values between `start` and `stop` are subject to floating-point rounding errors.

-   When `N = 1` and `endpoint` is `false`, only the `start` value is written to a provided input array. When `N = 1` and `endpoint` is `true`, only the `stop` value is written to a provided input array.

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var logEach = require( '@stdlib/console-log-each' );
var clinspace = require( '@stdlib/blas-ext-base-clinspace' );

var x = new Complex64Array( 10 );

var strt = new Complex64( 0.0, 0.0 );
var stp = new Complex64( 10.0, 5.0 );

clinspace( x.length, strt, stp, true, x, 1 );
logEach( '%s', x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/clinspace.h"
```

#### stdlib_strided_clinspace( N, start, stop, endpoint, \*X, strideX )

Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval.

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdbool.h>

stdlib_complex64_t start = stdlib_complex64( 0.0f, 0.0f );
stdlib_complex64_t stop = stdlib_complex64( 4.0f, 2.0f );

float x[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_clinspace( 4, start, stop, true, (stdlib_complex64_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **start**: `[in] stdlib_complex64_t` start of interval.
-   **stop**: `[in] stdlib_complex64_t` end of interval.
-   **endpoint**: `[in] bool` boolean indicating whether to include the `stop` value when writing values to the input array. If `true`, the input array is filled with evenly spaced values over the closed interval `[start, stop]`. If `false`, the input array is filled with evenly spaced values over the half-open interval `[start, stop)`.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
void stdlib_strided_clinspace( const CBLAS_INT N, const stdlib_complex64_t start, const stdlib_complex64_t stop, const bool endpoint, stdlib_complex64_t *X, const CBLAS_INT strideX );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_clinspace_ndarray( N, start, stop, endpoint, \*X, strideX, offsetX )

<!-- lint enable maximum-heading-length -->

Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.

```c
#include "stdlib/complex/float32/ctor.h"
#include <stdbool.h>

stdlib_complex64_t start = stdlib_complex64( 0.0f, 0.0f );
stdlib_complex64_t stop = stdlib_complex64( 4.0f, 2.0f );

float x[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_clinspace_ndarray( 4, start, stop, true, (stdlib_complex64_t *)x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **start**: `[in] stdlib_complex64_t` start of interval.
-   **stop**: `[in] stdlib_complex64_t` end of interval.
-   **endpoint**: `[in] bool` boolean indicating whether to include the `stop` value when writing values to the input array. If `true`, the input array is filled with evenly spaced values over the closed interval `[start, stop]`. If `false`, the input array is filled with evenly spaced values over the half-open interval `[start, stop)`.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
void stdlib_strided_clinspace_ndarray( const CBLAS_INT N, const stdlib_complex64_t start, const stdlib_complex64_t stop, const bool endpoint, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/clinspace.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
    // Create a strided array:
    float x[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Create start and stop values:
    const stdlib_complex64_t start = stdlib_complex64( 0.0f, 0.0f );
    const stdlib_complex64_t stop = stdlib_complex64( 10.0f, 5.0f );

    // Fill the array:
    stdlib_strided_clinspace( N, start, stop, true, (stdlib_complex64_t *)x, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        stdlib_complex64_t v = ( (stdlib_complex64_t *)x )[ i ];
        printf( "x[ %i ] = %f + %fi\n", i, stdlib_complex64_real( v ), stdlib_complex64_imag( v ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-clinspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-clinspace

[test-image]: https://github.com/stdlib-js/blas-ext-base-clinspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-clinspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-clinspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-clinspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-clinspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-clinspace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-clinspace/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-clinspace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-clinspace/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-clinspace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-clinspace/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-clinspace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-clinspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-clinspace/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
