import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import createTask from '../images/create_task.png'
import TrustBadge1 from '../images/trust_badge_1.png'
import TrustBadge2 from '../images/trust_badge_2.png'
import TrustBadge3 from '../images/trust_badge_3.png'
import TrustBadge4 from '../images/trust_badge_4.png'
import TrustBadge5 from '../images/trust_badge_5.png'
import TrustBadge6 from '../images/trust_badge_6.png'
import TrustBadge7 from '../images/trust_badge_7.png'
import TrustBadge8 from '../images/trust_badge_8.png'
import TrustBadge9 from '../images/trust_badge_9.png'
import TrustBadge10 from '../images/trust_badge_10.png'
import TrustBadge11 from '../images/trust_badge_11.png'
import TrustBadge12 from '../images/trust_badge_12.png'
import TrustBadge13 from '../images/trust_badge_13.png'
import TrustBadge14 from '../images/trust_badge_14.png'
import TrustBadge15 from '../images/trust_badge_15.png'
import TrustBadge16 from '../images/trust_badge_16.png'
import TrustBadge17 from '../images/trust_badge_17.png'
import TrustBadge18 from '../images/trust_badge_18.png'
import TrustBadge19 from '../images/trust_badge_19.png'
import TrustBadge20 from '../images/trust_badge_20.png'
import TrustBadge21 from '../images/trust_badge_21.png'
import TrustBadge22 from '../images/trust_badge_22.png'
import TrustBadge23 from '../images/trust_badge_23.png'
import TrustBadge24 from '../images/trust_badge_24.png'
import TrustBadge25 from '../images/trust_badge_25.png'
import TrustBadge26 from '../images/trust_badge_26.png'
import TrustBadge27 from '../images/trust_badge_27.png'
import TrustBadge28 from '../images/trust_badge_28.png'
import TrustBadge29 from '../images/trust_badge_29.png'
import TrustBadge30 from '../images/trust_badge_30.png'
import TrustBadge31 from '../images/trust_badge_31.png'
import TrustBadge32 from '../images/trust_badge_32.png'
import TrustBadge33 from '../images/trust_badge_33.png'
import TrustBadge34 from '../images/trust_badge_34.png'
import TrustBadge35 from '../images/trust_badge_35.png'

export default function TrustBadge() {
  const navigate = useNavigate();
  const badges = [
    TrustBadge1, TrustBadge2, TrustBadge3, TrustBadge4, TrustBadge5, TrustBadge6, TrustBadge7,
    TrustBadge8, TrustBadge9, TrustBadge10, TrustBadge11, TrustBadge12, TrustBadge13, TrustBadge14,
    TrustBadge15, TrustBadge16, TrustBadge17, TrustBadge18, TrustBadge19, TrustBadge20, TrustBadge21,
    TrustBadge22, TrustBadge23, TrustBadge24, TrustBadge25, TrustBadge26, TrustBadge27, TrustBadge28,
    TrustBadge29, TrustBadge30, TrustBadge31, TrustBadge32, TrustBadge33, TrustBadge34, TrustBadge35
  ];

  const VISIBLE_COUNT = 5;
  const ITEM_WIDTH = 160 + 20; // width + gap
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < badges.length - VISIBLE_COUNT) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <s-page heading="Trust Badge">
      <s-button slot="primary-action" variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'trustBadges' } })}>Create trust badge</s-button>
      <div className="m-4 md:m-0">
        <p className="font-semibold text-[18px] pb-2 pt-5">Trust badges</p>
        <div className="pb-4">
          <s-paragraph>
            Display trust badges below the product title, price, or image to build customer confidence.
          </s-paragraph>
        </div>
        <s-section>
          <s-card border="base">
            <div className="flex flex-col items-center justify-center py-5 md:py-16 text-center space-y-3">
              <div className="w-32 h-36 mb-5">
                <img src={createTask} alt='create-task' />
              </div>
              <p className="text-[16px] font-semibold">No trust badges yet</p>
              <p className="pb-3">
                Create your first trust badge to highlight secure payments, guarantees, and reliability, helping shoppers feel confident about their purchase.
              </p>
              <s-button variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'trustBadges' } })}>
                Create trust badge
              </s-button>
            </div>
          </s-card>
        </s-section>
        <div className="mt-4">
          <s-section padding="none">
            <s-card border="base">
              <p className="font-semibold px-4 py-3 border-b">
                Premade trust badges
              </p>

              <div className="overflow-hidden px-4 py-4">
                <div
                  className="flex gap-5 transition-transform duration-300"
                  style={{
                    transform: `translateX(-${startIndex * ITEM_WIDTH}px)`,
                  }}
                >
                  {badges.map((badge, i) => (
                    <div
                      key={i}
                      className="w-40 h-40 border rounded-lg flex items-center justify-center bg-white p-2 flex-shrink-0"
                    >
                      <img
                        src={badge}
                        alt=""
                        className="max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7F7F7] flex justify-center py-2">
                <button
                  onClick={handlePrev}
                  disabled={startIndex === 0}
                  className="p-1 bg-[#E3E3E3] rounded-l-lg disabled:opacity-40"
                >
                  <s-icon type="chevron-left" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={startIndex >= badges.length - VISIBLE_COUNT}
                  className="p-1 bg-[#E3E3E3] rounded-r-lg disabled:opacity-40"
                >
                  <s-icon type="chevron-right" />
                </button>
              </div>
            </s-card>
          </s-section>
        </div>
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
