/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/math/base/special/acscdf.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 1.1f, 1.55f, 1.99f, 2.44f, 2.88f, 3.32f, 3.77f, 4.21f, 4.66f, 5.1f };

	float v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_acscdf( x[ i ] );
		printf( "acscd(%f) = %f\n", x[ i ], v );
	}
}
