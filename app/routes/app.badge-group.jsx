import { useNavigate } from 'react-router-dom';
import createTask from '../images/create_task.png'

export default function BadgeGroup() {
  const navigate = useNavigate();

  return (
    <s-page heading="Badge groups">
      <s-button slot="secondary-actions">Label</s-button>
      <s-button slot="secondary-actions">Label</s-button>
      <s-button slot="primary-action" variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'badgesGroup' } })}>Create badge</s-button>
      <div className="m-4 md:m-0">
        <p className="font-semibold text-[18px] pb-2 pt-5">Groups</p>
        <div className="pb-4">
          <s-paragraph>
            Organize and display badge groups above or below the Add to cart button, price, or product image.
          </s-paragraph>
        </div>

        <s-section>
          <s-card border="base">
            <div className="flex flex-col items-center justify-center py-5 md:py-16 text-center space-y-3">
              <div className="w-32 h-36 mb-5">
                <img src={createTask} alt='create-task' />
              </div>
              <p className="text-[16px] font-semibold">No badge groups yet</p>
              <p className="pb-3">
                Create your first badge group to display trust, payment, or promotional badges together and build customer confidence.
              </p>
              <s-button variant="primary" onClick={() => navigate('/app/label-editor', { state: { type: 'badgesGroup' } })}>
                Create group
              </s-button>
            </div>
          </s-card>
        </s-section>
      </div>
      <div className="text-center mt-4">
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
