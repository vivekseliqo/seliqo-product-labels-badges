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
          onClick={() => navigate('/app/label-editor')}
        >
          Create labels
        </s-button>

        <p className="font-semibold text-[18px] pb-2 pt-5">
          Labels
        </p>

        <div className="pb-4">
          <s-paragraph>
            Show labels inside the product image on product pages,
            collection pages or more.
          </s-paragraph>
        </div>

        <s-section>
          <s-card border="base">
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
              <div className="w-32 h-36 mb-5">
                <img src={createTask} alt="create-task" />
              </div>

              <p className="text-[16px] font-semibold">
                There is no label here
              </p>

              <p className="pb-3">
                Create label and enhance product visibility.
              </p>

              <s-button
                variant="primary"
                commandFor="create-label-modal"
                command="--show"
                onClick={() => navigate('/app/label-editor')}
              >
                Create label
              </s-button>
            </div>
          </s-card>
        </s-section>

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
