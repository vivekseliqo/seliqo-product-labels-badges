import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import createTask from '../images/create_task.png'
import Label1 from '../images/label_1.png'
import Label2 from '../images/label_2.png'
import Label3 from '../images/label_3.png'
import Label4 from '../images/label_4.png'
import Label5 from '../images/label_5.png'
import Label6 from '../images/label_6.png'
import Label7 from '../images/label_7.png'
import Label8 from '../images/label_8.png'
import Label9 from '../images/label_9.png'
import Label10 from '../images/label_10.png'
import Label11 from '../images/label_11.png'
import Label12 from '../images/label_12.png'
import Label13 from '../images/label_13.png'
import Label14 from '../images/label_14.png'
import Label15 from '../images/label_15.png'
import Label16 from '../images/label_16.png'
import Label17 from '../images/label_17.png'
import Label18 from '../images/label_18.png'
import Label19 from '../images/label_19.png'
import Label20 from '../images/label_20.png'
import Label21 from '../images/label_21.png'
import Label22 from '../images/label_22.png'
import Label23 from '../images/label_23.png'
import Label24 from '../images/label_24.png'
import Label25 from '../images/label_25.png'

export default function Badge() {
  const navigate = useNavigate();
  const badges = [
    Label1, Label2, Label3, Label4, Label5,
    Label6, Label7, Label8, Label9, Label10,
    Label11, Label12, Label13, Label14, Label15,
    Label16, Label17, Label18, Label19, Label20,
    Label21, Label22, Label23, Label24, Label25,
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
    <s-page heading="Badge">
      <s-button slot="secondary-actions">Label</s-button>
      <s-button slot="secondary-actions">Label</s-button>
      <s-button slot="primary-action" variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'badges' } })}>Create badge</s-button>
      <div className="m-4 md:m-0">
        <p className="font-semibold text-[18px] pb-2 pt-5">Badges</p>
        <div className="pb-4">
          <s-paragraph>
            Display badges below the product title, price, or image to highlight key product statuses.
          </s-paragraph>
        </div>
        <s-section>
          <s-card border="base">
            <div className="flex flex-col items-center justify-center py-5 md:py-16 text-center space-y-3">
              <div className="w-32 h-36 mb-5">
                <img src={createTask} alt='create-task' />
              </div>
              <p className="text-[16px] font-semibold">No badges yet</p>
              <p className="pb-3">
                Create your first badge to showcase offers, trust signals, or special highlights and improve product visibility.
              </p>
              <s-button variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'badges' } })}>
                Create Badge
              </s-button>
            </div>
          </s-card>
        </s-section>
        <div className="mt-4">
          <s-section padding="none">
            <s-card border="base">
              <p className="font-semibold px-4 py-3 border-b">
                Premade image badges
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
