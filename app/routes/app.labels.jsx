import { useNavigate } from 'react-router-dom';
import createTask from "../images/create_task.png";
import { useMemo, useState } from 'react';
import Edit from "../images/edit.png";
import MenuHorizontal from "../images/menu_horizontal.png";

export default function Labels() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("All");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [labels] = useState([
    {
      id: 1,
      priority: 1,
      name: "Badge",
      type: "Text",
      status: "Active",
      start: "5 Mar at 01:00 PM",
      end: "5 Mar at 01:00 PM",
      image: "https://picsum.photos/id/29/80/80",
    },
    {
      id: 2,
      priority: 2,
      name: "Badge 1",
      type: "Text",
      status: "Active",
      start: "5 Mar at 01:00 PM",
      end: "5 Mar at 01:00 PM",
      image: "https://picsum.photos/id/12/80/80",
    },
    {
      id: 3,
      priority: 3,
      name: "Badge 2",
      type: "Text",
      status: "Draft",
      start: "5 Mar at 01:00 PM",
      end: "5 Mar at 01:00 PM",
      image: "https://picsum.photos/id/324/80/80",
    },
  ]);

  const tableData = useMemo(() => {
    let data = [...labels];
    if (tab !== "All") {
      data = data.filter((item) => item.status === tab);
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return data;
  }, [labels, tab, search, sortOrder]);

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
            <div className='font-bold p-3 border-b'>Created label</div>
            <s-table>
              <s-grid
                slot="filters"
                gridTemplateColumns="1fr auto"
                className="w-full"
              >
                {!isSearchOpen ? (
                  <div className="inline-flex">
                    {["All", "Active", "Draft"].map((item) => (
                      <s-button
                        key={item}
                        size="slim"
                        variant={tab === item ? "secondary" : "tertiary"}
                        onClick={() => setTab(item)}
                      >
                        {item}
                      </s-button>
                    ))}
                  </div>
                ) : (
                  <div className="w-full">
                    <s-input
                      className="w-full"
                      autoFocus
                      placeholder="Search labels"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                )}

                {!isSearchOpen ? (
                  <s-button
                    icon="search"
                    variant="secondary"
                    onClick={() => setIsSearchOpen(true)}
                  />
                ) : (
                  <s-button
                    icon="x"
                    variant="tertiary"
                    onClick={() => {
                      setSearch("");
                      setIsSearchOpen(false);
                    }}
                  />
                )}
              </s-grid>
              <s-table-header-row>
                <s-table-header>Priority</s-table-header>
                <s-table-header>Preview</s-table-header>
                <s-table-header
                  className="cursor-pointer select-none"
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }
                >
                  <div className="flex items-center gap-1">
                    <span>Name</span>

                    <s-icon
                      type={sortOrder === "asc" ? "sort-ascending" : "sort-descending"}
                      tone="base"
                      size="sm"
                    />
                  </div>
                </s-table-header>
                <s-table-header>Type</s-table-header>
                <s-table-header>Status</s-table-header>
                <s-table-header>Start time</s-table-header>
                <s-table-header>End time</s-table-header>
                <s-table-header>Action</s-table-header>
              </s-table-header-row>
              <s-table-body>
                {tableData.length === 0 ? (
                  <s-table-row>
                    <s-table-cell colSpan="8">
                      <div className="text-center py-6 text-gray-500">
                        No labels found
                      </div>
                    </s-table-cell>
                  </s-table-row>
                ) : (
                  tableData.map((item, index) => (
                    <s-table-row key={item.id}>
                      <s-table-cell>
                        <div className="flex items-center">
                          <s-icon type="drag-handle" />
                          {index + 1}.
                        </div>
                      </s-table-cell>

                      <s-table-cell>
                        <s-clickable
                          border="base"
                          borderRadius="base"
                          overflow="hidden"
                          inlineSize="40px"
                          blockSize="40px"
                        >
                          <s-image objectFit="cover" src={item.image} />
                        </s-clickable>
                      </s-table-cell>

                      <s-table-cell>{item.name}</s-table-cell>
                      <s-table-cell>{item.type}</s-table-cell>

                      <s-table-cell>
                        <s-badge
                          tone={item.status === "Active" ? "success" : "neutral"}
                        >
                          {item.status}
                        </s-badge>
                      </s-table-cell>

                      <s-table-cell>{item.start}</s-table-cell>
                      <s-table-cell>{item.end}</s-table-cell>

                      <s-table-cell>
                        <div className="inline-flex border rounded-md overflow-hidden relative">
                          <button
                            className="p-1 hover:bg-gray-100 border-r"
                            commandFor="customer-menu"
                            command="--show"
                          >
                            <img
                              src={MenuHorizontal}
                              alt="menu"
                              className="w-4 h-4"
                            />
                          </button>
                          <s-menu
                            id="customer-menu"
                            accessibilityLabel="Customer actions"
                          >
                            <s-button icon="edit">Rename</s-button>
                            <s-button icon="toggle-off">Deactivate</s-button>
                            <s-button icon="duplicate">Duplicate</s-button>
                            <s-button icon="delete" tone="critical">
                              Remove
                            </s-button>
                          </s-menu>
                          <button
                            className="p-1 hover:bg-gray-100"
                            onClick={() =>
                              navigate('/app/label-editor', { state: { type: 'labels' } })
                            }
                          >
                            <img
                              src={Edit}
                              alt="edit"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      </s-table-cell>
                    </s-table-row>
                  ))
                )}
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
