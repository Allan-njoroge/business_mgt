// Features.js
import React from 'react';
import Card from '@/components/ui/Card';

const FeatureCard = ({ title, description, children }) => {
    return (
        <Card>
            <div>
                <h2 className="text-xl font-semibold text-blue-500">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
            <div>
                {children}
            </div>
        </Card>
    );
};

const Features = () => {
    return (
        <div className="max-w-[1440px] flex justify-center">
            <div className="w-full mx-10">
                <h1 className="text-center text-5xl text-blue-500">Features</h1>

                {/* Features Card Section */}
                <div className="flex flex-wrap gap-10 justify-evenly my-20">
                    <FeatureCard
                        title="Streamlined Invoicing"
                        description="Easily creates, customizes and send professional invoices to your clients with our intuitive invoice system"
                    >
                        <p>
                            Additional content specific to Streamlined Invoicing feature.
                        </p>
                    </FeatureCard>

                    <FeatureCard
                        title="Inventory Management"
                        description="Keep track of your product inventory levels, manage stock and generate reports to optimize you inventory management process"
                    >
                        <p>
                            Additional content specific to Inventory Management feature.
                        </p>
                    </FeatureCard>

                    <FeatureCard
                        title="Advanced Analytics and Reporting"
                        description="Gain valuable insights into your business performance with advanced analytics and reporting capabilities. Track key metrics, identify trends and make data-driven decisions to drive growth and profitability."
                    >
                        <p>
                            Additional content specific to Advanced Analytics and Reporting feature.
                        </p>
                    </FeatureCard>
                </div>
            </div>
        </div>
    );
};

export default Features;
