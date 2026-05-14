/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {SimpleGrid} from '@salesforce/retail-react-app/app/components/shared/ui'
import {Region} from '@salesforce/commerce-sdk-react/page-designer'

export const MobileGrid2r3c = ({component, regions}) => (
    <SimpleGrid className="mobile-2r-3c" columns={{base: 3, sm: 6}} gridGap={4}>
        {regions.map((region) => (
            <Region key={region.id} component={component} regionId={region.id} />
        ))}
    </SimpleGrid>
)

MobileGrid2r3c.displayName = 'MobileGrid2r3c'

MobileGrid2r3c.propTypes = {
    component: PropTypes.object.isRequired,
    regions: PropTypes.array.isRequired
}

export default MobileGrid2r3c
