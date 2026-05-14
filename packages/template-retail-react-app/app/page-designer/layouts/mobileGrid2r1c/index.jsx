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

export const MobileGrid2r1c = ({component, regions}) => (
    <SimpleGrid className="mobile-2r-1c" columns={{base: 1, sm: 2}} gridGap={4}>
        {regions.map((region) => (
            <Region key={region.id} component={component} regionId={region.id} />
        ))}
    </SimpleGrid>
)

MobileGrid2r1c.displayName = 'MobileGrid2r1c'

MobileGrid2r1c.propTypes = {
    component: PropTypes.object.isRequired,
    regions: PropTypes.array.isRequired
}

export default MobileGrid2r1c
