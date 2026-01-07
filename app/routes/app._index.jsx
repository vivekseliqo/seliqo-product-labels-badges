import { useState } from "react";
import enableAppImage from "../images/enable_app.png";
import createLabel from "../images/create_label.png";
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  // const [openDatePicker, setOpenDatePicker] = useState(false);
  const [isAppEnabled, setIsAppEnabled] = useState(false);

  const completed = 1;
  const total = 3;
  const percent = (completed / total) * 100;

  return (
    <s-page heading="Dashboard">
      <div className="m-4 md:m-0 border rounded-xl bg-white p-4 !my-4">
        <s-card>
          <div className="space-y-3">
            <div>
              <div className="pb-2">
                <s-text type="strong">Setup guide</s-text>
              </div>
              <s-paragraph>Let’s get your app ready</s-paragraph>
            </div>

            <div className="pb-3">
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
              id="open-enable-app-modal"
              commandFor="enable-app-modal"
              command="--show"
              className="hidden"
            />
            <div className="flex justify-between items-center">
              <div
                className="flex gap-2 items-center cursor-pointer select-none"
                onClick={() =>
                  document.getElementById("open-enable-app-modal")?.click()
                }
              >
                <s-icon
                  type={isAppEnabled ? "check-circle-filled" : "circle-dashed"}
                />
                <s-text type="strong">
                  {isAppEnabled ? "App enabled" : "Enable app"}
                </s-text>
              </div>
            </div>
            <s-modal id="enable-app-modal" heading="Enable app embed">
              <div className="space-y-4">
                <s-paragraph>
                  App embed is required to display labels/badges on your storefront.
                </s-paragraph>

                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={enableAppImage}
                    alt="Enable App"
                    className="w-full md:w-1/2 rounded-lg"
                  />

                  <div className="flex flex-col justify-center gap-2">
                    <s-text type="strong">
                      Follow these steps to easily enable app embed:
                    </s-text>

                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Click on <strong>Enable app embed</strong></li>
                      <li>Click on <strong>Save</strong></li>
                    </ol>

                    <s-button
                      slot="primary-action"
                      variant="primary"
                      commandFor="enable-app-modal"
                      command="--hide"
                      onClick={() => setIsAppEnabled(true)}
                    >
                      Enable app embed
                    </s-button>
                  </div>
                </div>
              </div>
            </s-modal>

          </div>
        </s-card>
      </div>

      <div className="m-4 md:m-0 border rounded-xl bg-white p-4 !mb-4">
        <s-card>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 items-center">
              <s-text type="strong">Analytics</s-text>
              <s-badge tone="info">This month</s-badge>
            </div>
            {/* <s-button variant="secondary" onClick={() => setOpenDatePicker(!openDatePicker)}>
              <div className="flex items-center">
                <s-icon type="calendar" />This month
              </div>
            </s-button>
            {openDatePicker && <s-date-picker
              view="2025-05"
              type="single"
              onChange={(e) => {
                console.log("Selected date:", e.detail);
                setOpenDatePicker(false);
              }}
            />} */}
            <s-date-field defaultView="2025-09" defaultValue="2025-09-01" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Total badge clicks</s-text>
                <p className="text-[17px] font-bold">50</p>
              </div>
            </s-box>

            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Total label clicks</s-text>
                <p className="text-[17px] font-bold">10</p>
              </div>
            </s-box>

            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Conversion rate</s-text>
                <p className="text-[17px] font-bold">20%</p>
              </div>
            </s-box>

            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Average order value (AOV)</s-text>
                <p className="text-[17px] font-bold">10</p>
              </div>
            </s-box>
          </div>
        </s-card>
      </div>

      <div className="m-4 md:m-0 border rounded-xl bg-white p-4 !mb-4">
        <s-card>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 items-center">
              <s-text type="strong">Main features</s-text>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <s-box padding="base" border="base" borderRadius="base" className="w-full">
                <div className="flex justify-between items-stretch">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Label</p>
                      <p className="text-[13px]">Create and manage product labels for your Shopify store</p>
                    </div>
                    <s-button
                      variant="auto"
                      commandFor="create-label-modal"
                      command="--show"
                      onClick={() =>
                        navigate('/app/label-editor', { state: { type: 'labels' } })
                      }
                    >
                      Create label
                    </s-button>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 object-contain"
                      src={createLabel}
                      alt="create badge"
                    />
                  </div>
                </div>
              </s-box>
            </div>
            <div>
              <s-box padding="base" border="base" borderRadius="base" className="w-full">
                <div className="flex justify-between items-stretch">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Badge</p>
                      <p className="text-[13px]">Design eye-catching badges to highlight your Shopify products</p>
                    </div>
                    <s-button
                      variant="auto"
                      commandFor="create-label-modal"
                      command="--show"
                      onClick={() =>
                        navigate('/app/label-editor', { state: { type: 'badges' } })
                      }
                    >
                      Create badge
                    </s-button>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-20 h-20 object-contain"
                      src={createLabel}
                      alt="create badge"
                    />
                  </div>
                </div>
              </s-box>
            </div>
          </div>
        </s-card>
      </div>
    </s-page>
  );
}