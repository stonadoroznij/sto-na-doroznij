import { ServiceCard } from '../../components';
import React from 'react';

const OurServices = () => {
    return (
        <main className="max-w-352 m-auto p-6">
            <section className="text-white">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>
            </section>
        </main>
    )
}

export default OurServices
