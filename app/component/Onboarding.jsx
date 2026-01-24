import { useState } from "react";
import onboardLabel from '../images/onboard_card_label.png';
import onboardBadge from '../images/onboard_card_badge.png';
import onboardCreateLabel from '../images/onboard_create_label_card.png';
import onboardEnableApp from '../images/onboard_enable_app.png';

export default function Onboarding() {
    const [showOverview, setShowOverview] = useState(false);
    const [showCreateLabel, setShowCreateLabel] = useState(false);
    const [showEnableApp, setShowEnableApp] = useState(false);
    const [overviewCompleted, setOverviewCompleted] = useState(false);
    const [createLabelCompleted, setCreateLabelCompleted] = useState(false);
    const [enableAppCompleted, setEnableAppCompleted] = useState(false);
    const completed =
        Number(overviewCompleted) +
        Number(createLabelCompleted) +
        Number(enableAppCompleted);

    const total = 3;
    const percent = (completed / total) * 100;

    return (
        <s-page heading="Dashboard">
            <p className="text-xl font-bold pt-6">Welcome to Seliqo label & badge!</p>
            <div className="m-4 md:m-0 border rounded-xl bg-white p-4 !my-4">
                <s-card>
                    <div className="space-y-3">
                        <div>
                            <div className="pb-2">
                                <p className="font-bold">Let’s get your store ready in a few steps.</p>
                            </div>
                        </div>

                        <div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gray-900 rounded-full transition-all"
                                    style={{ width: `${percent}%` }}
                                ></div>
                            </div>

                            <p className="pt-2">
                                {completed}/{total} completed
                            </p>
                        </div>

                        <s-button
                            className="hidden"
                        />
                        {!showOverview && <div className="flex justify-between items-center">
                            <div
                                className="flex gap-2 items-center cursor-pointer select-none"
                                onClick={() => setShowOverview(true)}
                            >
                                <s-icon
                                    type={overviewCompleted ? "check-circle-filled" : "circle-dashed"}
                                />
                                <p className="font-semibold text-black">
                                    {overviewCompleted ? "Overview" : "Overview"}
                                </p>
                            </div>
                        </div>}
                        {showOverview && <div className="bg-[#F3F3F3] rounded-lg">
                            <div className="flex justify-between items-center px-3 pt-3">
                                <div
                                    className="flex gap-2 items-center cursor-pointer select-none"
                                >
                                    <s-icon
                                        type={overviewCompleted ? "check-circle-filled" : "circle-dashed"}
                                    />
                                    <p className="font-bold">
                                        {overviewCompleted ? "Overview" : "Overview"}
                                    </p>
                                </div>
                            </div>
                            <p className="mb-3 px-10 pt-3 pb-2">Choose how you want to highlight products in your store.</p>
                            <div className="flex gap-6 px-10">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-center">
                                        <img
                                            src={onboardLabel}
                                            alt="product"
                                            className="h-72"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold pb-2">Product label</p>
                                        <p className="text-[#8C8C8C]">Highlight products with custom labels like Sale, New, or Featured.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-center">
                                        <img
                                            src={onboardBadge}
                                            alt="product"
                                            className="h-72"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold pb-2">Product badge</p>
                                        <p className="text-[#8C8C8C]">Add badges to show offers, pricing highlights, or key messages.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5">
                                <s-divider color="strong" />
                            </div>
                            <div className="flex justify-end pb-5 pr-5">
                                <s-button-group>
                                    <s-button
                                        slot="secondary-actions"
                                        onClick={() => {
                                            setShowOverview(false);
                                            setOverviewCompleted(true);
                                        }}
                                    >
                                        Get started
                                    </s-button>
                                    <s-button variant="primary" slot="primary-action" onClick={() => setShowOverview(false)}>Skip all</s-button>
                                </s-button-group>
                            </div>
                        </div>}
                        {!showCreateLabel && <div className="flex justify-between items-center">
                            <div
                                className="flex gap-2 items-center cursor-pointer select-none"
                                onClick={() => setShowCreateLabel(true)}
                            >
                                <s-icon
                                    type={createLabelCompleted ? "check-circle-filled" : "circle-dashed"}
                                />
                                <p className="font-semibold text-black">
                                    {createLabelCompleted ? "Create a label" : "Create a label"}
                                </p>
                            </div>
                        </div>}
                        {showCreateLabel && <div className="bg-[#F3F3F3] rounded-lg">
                            <div className="flex justify-between items-center px-3 pt-3">
                                <div
                                    className="flex gap-2 items-center cursor-pointer select-none"
                                >
                                    <s-icon
                                        type={createLabelCompleted ? "check-circle-filled" : "circle-dashed"}
                                    />
                                    <p className="font-bold">
                                        {createLabelCompleted ? "Create a label" : "Create a label"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <p className="pl-10 pt-3">Design your first label and choose where it appears on your products. You can control label text, style, position, and product rules.</p>
                                <div className="flex justify-center mt-[-15px] mb-[-50px]">
                                    <img
                                        src={onboardCreateLabel}
                                        alt="product"
                                        className="h-72"
                                    />
                                </div>
                            </div>
                            <div className="py-5">
                                <s-divider color="strong" />
                            </div>
                            <div className="flex justify-end pb-5 pr-5">
                                <s-button-group>
                                    <s-button slot="secondary-actions" onClick={() => setShowCreateLabel(false)}>Skip</s-button>
                                    <s-button
                                        variant="primary"
                                        slot="primary-action"
                                        onClick={() => {
                                            setShowCreateLabel(false);
                                            setCreateLabelCompleted(true);
                                        }}
                                    >
                                        Create label
                                    </s-button>
                                </s-button-group>
                            </div>
                        </div>}
                        {!showEnableApp && <div className="flex justify-between items-center">
                            <div
                                className="flex gap-2 items-center cursor-pointer select-none"
                                onClick={() => setShowEnableApp(true)}
                            >
                                <s-icon
                                    type={enableAppCompleted ? "check-circle-filled" : "circle-dashed"}
                                />
                                <p className="font-semibold text-black">
                                    {enableAppCompleted ? "App enabled" : "Enable app embed"}
                                </p>
                            </div>
                        </div>}
                        {showEnableApp && <div className="bg-[#F3F3F3] rounded-lg">
                            <div className="flex justify-between items-center px-3 pt-3">
                                <div
                                    className="flex gap-2 items-center cursor-pointer select-none"
                                >
                                    <s-icon
                                        type={enableAppCompleted ? "check-circle-filled" : "circle-dashed"}
                                    />
                                    <p className="font-bold">
                                        {enableAppCompleted ? "App enabled" : "Enable app embed"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="pl-10 pt-3">Turn on the app embed to display labels and badges on your storefront.</p>
                                <div className="flex justify-center pr-5">
                                    <img
                                        src={onboardEnableApp}
                                        alt="product"
                                        className="h-52"
                                    />
                                </div>
                            </div>
                            <div className="py-5">
                                <s-divider color="strong" />
                            </div>
                            <div className="flex justify-end pb-5 pr-5">
                                <s-button-group>
                                    <s-button slot="secondary-actions" onClick={() => setShowEnableApp(false)}>Skip</s-button>
                                    <s-button
                                        variant="primary"
                                        slot="primary-action"
                                        onClick={() => {
                                            setShowEnableApp(false);
                                            setEnableAppCompleted(true);
                                        }}
                                    >
                                        Enable app
                                    </s-button>
                                </s-button-group>
                            </div>
                        </div>}
                    </div>
                </s-card>
            </div>
            <div className="text-center my-4">
                <s-text variant="bodySm">
                    Learn about this app{" "}
                    <a
                        href="#"
                        className="text-blue-600 underline"
                    >
                        link text
                    </a>
                </s-text>
            </div>
        </s-page>
    );
}