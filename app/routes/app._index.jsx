import { useState } from "react";

export default function Index() {
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const completed = 1;
  const total = 3;
  const percent = (completed / total) * 100;

  return (
    <s-page heading="Dashboard">
      <s-button slot="secondary-actions">Label</s-button>
      <s-button slot="secondary-actions">Label</s-button>
      <div className="m-4 md:m-0 border rounded-xl bg-white p-4 !mb-4">
        <s-card>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="pb-2">
                  <s-text type="strong">Setup guide</s-text>
                </div>
                <s-paragraph>Let’s set things up.</s-paragraph>
              </div>
              <s-icon type="menu-horizontal" />
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

            <s-box
              padding="base"
              background="strong"
              borderRadius="base"
            >
              <div className="flex gap-2 items-start">
                <s-icon type="check-circle-filled" />
                <div className="space-y-1">
                  <div className="pb-2">
                    <s-text type="strong">
                      Upload video
                    </s-text>
                  </div>
                  <s-text variant="bodySm">
                    Upload videos from system and your Instagram account
                  </s-text>

                  <div className="flex gap-2 pt-2">
                    <s-button size="slim">Upload video</s-button>
                    <s-button size="slim" variant="secondary">
                      Import from Instagram
                    </s-button>
                  </div>
                </div>
              </div>
            </s-box>

            <div className="flex gap-2 items-center text-gray-500">
              <s-icon type="circle-dashed" />
              <s-text type="strong">Enable app</s-text>
            </div>
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
            <s-button variant="secondary" onClick={() => setOpenDatePicker(!openDatePicker)}>
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
            />}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Total click badge</s-text>
                <p className="text-[17px] font-bold">50</p>
              </div>
            </s-box>

            <s-box padding="base" border="base" borderRadius="base">
              <div className="flex flex-col gap-2">
                <s-text variant="bodySm">Total click label</s-text>
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
                <s-text variant="bodySm">AOV</s-text>
                <p className="text-[17px] font-bold">10</p>
              </div>
            </s-box>
          </div>
        </s-card>
      </div>
    </s-page>
  );
}