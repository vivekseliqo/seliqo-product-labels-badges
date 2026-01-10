import { useState, useMemo } from 'react'
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
import Edit from "../images/edit.png";
import MenuHorizontal from "../images/menu_horizontal.png";

export default function Badge() {
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
        {/* <div>
          <p className="font-semibold text-[18px] pb-2 pt-5">Badges</p>
          <div className="mb-6">
            <s-paragraph>
              Show Badges inside the product image on product pages, collection pages
              or more.
            </s-paragraph>
          </div>

          <s-section padding="none">
            <div className='font-bold p-3 border-b'>Created badge</div>
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
