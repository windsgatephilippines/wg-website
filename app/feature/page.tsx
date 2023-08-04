import PageHeader from '@/components/PageHeader'
import Feature from '@/components/feature/Feature'
import React from 'react'
import FeatureRight from '@/components/featureRight/FeatureRight'

const FeaturePage = () =>{
    const pageName = [
        'Home',
        'Pages',
        'Feature'
    ]
    return(
        <>
            <PageHeader pageName={pageName}></PageHeader>
            <div className="container-xxl py-5">
                <div className="container">
                    <Feature featureRight={<FeatureRight />}></Feature>
                </div>
            </div>
        </>
    )
}

export default FeaturePage