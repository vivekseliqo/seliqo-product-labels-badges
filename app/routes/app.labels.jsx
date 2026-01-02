import { useNavigate } from 'react-router-dom';
import createTask from "../images/create_task.png";

export default function Labels() {
  const navigate = useNavigate();

  return (
    <>
      <s-page heading="Labels">
        <s-button slot="secondary-actions">Label</s-button>
        <s-button slot="secondary-actions">Label</s-button>

        <s-button
          slot="primary-action"
          variant="primary"
          commandFor="create-label-modal"
          command="--show"
          onClick={() => navigate('/app/label-editor', { state: { type: 'labels' } })}
        >
          Create labels
        </s-button>

        <div className="m-4 md:m-0">
          <p className="font-semibold text-[18px] pb-2 pt-0 md:pt-5">
            Labels
          </p>

          <div className="pb-4">
            <s-paragraph>
              Add labels to product images on product pages, collection pages, and more.
            </s-paragraph>
          </div>

          <div className="border rounded-xl bg-white p-4">
            <s-card border="base">
              <div className="flex flex-col items-center justify-center py-5 md:py-16 text-center space-y-3">
                <div className="w-32 h-36 mb-5">
                  <img src={createTask} alt="create-task" />
                </div>

                <p className="text-[16px] font-semibold">
                  No labels yet
                </p>

                <p className="pb-3">
                  Create your first label to highlight offers, new arrivals, or important product details and increase visibility.
                </p>

                <s-button
                  variant="primary"
                  commandFor="create-label-modal"
                  command="--show"
                  onClick={() => navigate('/app/label-editor', { state: { type: 'labels' } })}
                >
                  Create label
                </s-button>
              </div>
            </s-card>
          </div>
        </div>

        <div className="text-center mt-4">
          <s-text variant="bodySm">
            Learn about this app{" "}
            <a href="#" className="text-blue-600 underline">
              link text
            </a>
          </s-text>
        </div>
      </s-page>
    </>
  );
}
