import { useNavigate } from 'react-router-dom';
import createTask from "../images/create_task.png";
import { useState } from 'react';
// import Edit from "../images/edit.png";
// import MenuHorizontal from "../images/menu_horizontal.png";

export default function Labels() {
  const navigate = useNavigate();
  // const [tab, setTab] = useState("all");

  return (
    <>
      <s-page heading="Labels">

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

        {/* <div className="m-4 md:m-0">
          <p className="font-semibold text-[18px] pb-2 pt-5">Labels</p>
          <div className="mb-6">
            <s-paragraph>
              Show labels inside the product image on product pages, collection pages
              or more.
            </s-paragraph>
          </div>

          <s-section padding="none">
            <s-table>
              <s-grid slot="filters" gridTemplateColumns="1fr auto">
                <div className="inline-flex">
                  {["All", "Active", "Draft"].map((item) => (
                    <s-button
                      key={item}
                      size="slim"
                      variant={tab === item ? "secondary" : "tertiary"}
                      onClick={() => setStatus(item)}
                    >
                      {item}
                    </s-button>
                  ))}
                </div>
                <s-button icon="search" variant="secondary" />
              </s-grid>
              <s-table-header-row>
                <s-table-header>Priority</s-table-header>
                <s-table-header>Preview</s-table-header>
                <s-table-header>Name</s-table-header>
                <s-table-header>Type</s-table-header>
                <s-table-header>Status</s-table-header>
                <s-table-header>Start time</s-table-header>
                <s-table-header>End time</s-table-header>
                <s-table-header>Action</s-table-header>
              </s-table-header-row>

              <s-table-body>
                <s-table-row>
                  <s-table-cell>
                    <div className="flex items-center"><s-icon type="drag-handle" />1.</div>
                  </s-table-cell>
                  <s-table-cell>
                    <s-clickable
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        src="https://picsum.photos/id/29/80/80"
                      />
                    </s-clickable>
                  </s-table-cell>

                  <s-table-cell>Badge</s-table-cell>
                  <s-table-cell>Text</s-table-cell>

                  <s-table-cell>
                    <s-badge tone="success">Active</s-badge>
                  </s-table-cell>

                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>
                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>

                  <s-table-cell>
                    <div className="inline-flex border rounded-md overflow-hidden">
                      <button className="p-1 hover:bg-gray-100 border-r">
                        <img
                          src={MenuHorizontal}
                          alt="Menu"
                          className="w-4 h-4"
                        />
                      </button>

                      <button className="p-1 hover:bg-gray-100">
                        <img
                          src={Edit}
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </s-table-cell>

                </s-table-row>

                <s-table-row>
                  <s-table-cell><div className="flex items-center"><s-icon type="drag-handle" />2.</div></s-table-cell>

                  <s-table-cell>
                    <s-clickable
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        src="https://picsum.photos/id/12/80/80"
                      />
                    </s-clickable>
                  </s-table-cell>

                  <s-table-cell>Badge 1</s-table-cell>
                  <s-table-cell>Text</s-table-cell>

                  <s-table-cell>
                    <s-badge tone="success">Active</s-badge>
                  </s-table-cell>

                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>
                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>

                  <s-table-cell>
                    <div className="inline-flex border rounded-md overflow-hidden">
                      <button className="p-1 hover:bg-gray-100 border-r">
                        <img
                          src={MenuHorizontal}
                          alt="Menu"
                          className="w-4 h-4"
                        />
                      </button>

                      <button className="p-1 hover:bg-gray-100">
                        <img
                          src={Edit}
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </s-table-cell>

                </s-table-row>

                <s-table-row>
                  <s-table-cell><div className="flex items-center"><s-icon type="drag-handle" />3.</div></s-table-cell>

                  <s-table-cell>
                    <s-clickable
                      border="base"
                      borderRadius="base"
                      overflow="hidden"
                      inlineSize="40px"
                      blockSize="40px"
                    >
                      <s-image
                        objectFit="cover"
                        src="https://picsum.photos/id/324/80/80"
                      />
                    </s-clickable>
                  </s-table-cell>

                  <s-table-cell>Badge 2</s-table-cell>
                  <s-table-cell>Text</s-table-cell>

                  <s-table-cell>
                    <s-badge tone="neutral">Draft</s-badge>
                  </s-table-cell>

                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>
                  <s-table-cell>5 Mar at 01:00 PM</s-table-cell>

                  <s-table-cell>
                    <div className="inline-flex border rounded-md overflow-hidden">
                      <button className="p-1 hover:bg-gray-100 border-r">
                        <img
                          src={MenuHorizontal}
                          alt="Menu"
                          className="w-4 h-4"
                        />
                      </button>

                      <button className="p-1 hover:bg-gray-100">
                        <img
                          src={Edit}
                          alt="Edit"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </s-table-cell>
                </s-table-row>
              </s-table-body>
            </s-table>
          </s-section>
        </div> */}

        <div className="text-center my-4">
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
