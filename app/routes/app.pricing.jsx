import { useState } from "react";

export default function Pricing() {
  const [active, setActive] = useState("monthly");
  const completed = 1;
  const total = 3;
  const percent = (completed / total) * 100;

  const prices = {
    monthly: {
      starter: 6.99,
      essential: 9.99,
      professional: 29.99,
    },
    yearly: {
      starter: 5.59,
      essential: 7.99,
      professional: 23.99,
    },
  };

  return (
    <s-page heading="Pricing">

      <div className="m-4 md:m-0 !mb-6">
        <s-card>
          <div className="flex flex-col gap-4 mt-4">
            <s-box border="base" borderRadius="large" background="base" padding="base">
              <s-text>
                You’re currently on the <strong>Free</strong> 0 / 5,000 monthly views used
                One visitor can generate multiple views per session.
              </s-text>
              <div className="pt-3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full transition-all"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            </s-box>
          </div>
        </s-card>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex border border-gray-300 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => setActive("monthly")}
            className={`px-3 py-1 text-[12px] font-medium transition
            ${active === "monthly"
                ? "bg-[#CCCCCC] text-black"
                : "bg-white text-gray-700"
              }`}
          >
            Billed monthly
          </button>

          <button
            onClick={() => setActive("yearly")}
            className={`px-3 py-1 text-[12px] font-medium transition
            ${active === "yearly"
                ? "bg-[#CCCCCC] text-black"
                : "bg-white text-gray-700"
              }`}
          >
            Billed yearly — Save 20%
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4 md:m-0">

        <s-box border="base" borderRadius="large" background="base" padding="base">
          <s-card>
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Starter</p>
                  <s-text variant="bodySm">
                    Up to <strong>20,000</strong> monthly views
                  </s-text>
                </div>

                <ul className="space-y-1 text-sm">
                  <li className="flex gap-1"><s-icon type="check" /> Everything in Free</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited product page blocks</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited icons per block</li>
                  <li className="flex gap-1"><s-icon type="check" /> Upload your own icons</li>
                </ul>
              </div>

              <div className="pt-6">
                <div className="flex items-baseline font-bold">
                  <p className="text-3xl">${prices[active].starter.toFixed(2)}</p>
                  <span className="text-sm font-normal">/ month</span>
                </div>

                <div className="pt-3">
                  <s-button variant="primary">
                    Start FREE 7-day trial
                  </s-button>
                </div>
              </div>
            </div>
          </s-card>
        </s-box>

        <s-box border="base" borderRadius="large" background="base" padding="base">
          <s-card>
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold">Essential</p>
                  <s-badge tone="success">Most popular</s-badge>
                </div>

                <s-text variant="bodySm">
                  Up to <strong>50,000</strong> monthly views
                </s-text>

                <ul className="space-y-1 text-sm">
                  <li className="flex gap-1"><s-icon type="check" /> Everything in Starter</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited cart page blocks</li>
                  <li className="flex gap-1"><s-icon type="check" /> Add block using product tags</li>
                  <li className="flex gap-1"><s-icon type="check" /> Geolocation targeting</li>
                  <li className="flex gap-1"><s-icon type="check" /> Translations</li>
                </ul>
              </div>

              <div className="pt-6">
                <div className="flex items-baseline font-bold">
                  <p className="text-3xl">${prices[active].essential.toFixed(2)}</p>
                  <span className="text-sm font-normal">/ month</span>
                </div>

                <div className="pt-3">
                  <s-button fullWidth variant="primary">
                    Start FREE 7-day trial
                  </s-button>
                </div>
              </div>
            </div>
          </s-card>
        </s-box>

        <s-box border="base" borderRadius="large" background="base" padding="base">
          <s-card>
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Professional</p>
                  <s-text variant="bodySm">
                    <strong>Unlimited</strong> views
                  </s-text>
                </div>

                <ul className="space-y-1 text-sm">
                  <li className="flex gap-1"><s-icon type="check" /> All premium features</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited product page blocks</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited cart page blocks</li>
                  <li className="flex gap-1"><s-icon type="check" /> Unlimited icons per block</li>
                  <li className="flex gap-1"><s-icon type="check" /> Translations & Geo targeting</li>
                </ul>
              </div>

              <div className="pt-6">
                <div className="flex items-baseline font-bold">
                  <p className="text-3xl">${prices[active].professional.toFixed(2)}</p>
                  <span className="text-sm font-normal">/ month</span>
                </div>

                <div className="pt-3">
                  <s-button fullWidth variant="primary">
                    Start FREE 7-day trial
                  </s-button>
                </div>
              </div>
            </div>
          </s-card>
        </s-box>

      </div>

      <s-page heading="Reviews">
        <div className="text-center my-8">
          <p className="font-bold text-lg md:text-xl">Trusted by 25,000+ Shopify store owners</p>
          <s-text variant="bodySm" tone="subdued">500+ five-star reviews</s-text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4 md:m-0 !mb-6">
          <s-box border="base" borderRadius="large" background="base" padding="base">
            <s-card>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-center">
                  Excellent app! Managing labels and badges has never been easier. It’s intuitive, saves a ton of time, and makes organizing everything simple. The interface is smooth and user-friendly, and it has significantly improved our workflow.
                </p>
                <s-text variant="bodySm" type="strong" className="mt-2 text-center">Zephyr Finch</s-text>
              </div>
            </s-card>
          </s-box>

          <s-box border="base" borderRadius="large" background="base" padding="base">
            <s-card>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-center">
                  This app is very clean, intuitive, and easy to use. Navigation is smooth and straightforward, and the customer support is excellent — quick, responsive, and always helpful.
                </p>
                <s-text variant="bodySm" type="strong" className="mt-2 text-center">Aurora Lumen</s-text>
              </div>
            </s-card>
          </s-box>

          <s-box border="base" borderRadius="large" background="base" padding="base">
            <s-card>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-center">
                  Amazing free app! It makes adding trust badges effortless and completely hassle-free. The interface is simple and intuitive, saving time while giving a professional touch to the store.
                </p>
                <s-text variant="bodySm" type="strong" className="mt-2 text-center">Orion Vale</s-text>
              </div>
            </s-card>
          </s-box>

          <s-box border="base" borderRadius="large" background="base" padding="base">
            <s-card>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-center">
                  Simple, clean, and highly effective! This app instantly makes my store look more trustworthy and professional. Easy to use, well-designed, and adds real value without extra effort.
                </p>
                <s-text variant="bodySm" type="strong" className="mt-2 text-center">Kb Luoango</s-text>
              </div>
            </s-card>
          </s-box>
        </div>
      </s-page>
    </s-page>
  );
}
