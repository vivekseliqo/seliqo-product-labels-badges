import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productFrame from '../images/product_frame.png'
import statusActivation from '../images/status_activation.png'
import chorusShape from '../images/chorus_shape.png'
import circleShape from '../images/circle_shape.png'
import rectangleRibbonShape from '../images/rectangle_ribbon_shape.png'
import rectangleShape from '../images/rectangle_shape.png'
import starShape from '../images/star_shape.png'
import roundedStarShape from '../images/rounded_star_shape.png'
// import Label1 from '../images/label_1.png'
// import Label2 from '../images/label_2.png'
// import Label3 from '../images/label_3.png'
// import Label4 from '../images/label_4.png'
// import Label5 from '../images/label_5.png'
import Label6 from '../images/label_6.png'
import Label7 from '../images/label_7.png'
import Label8 from '../images/label_8.png'
import Label9 from '../images/label_9.png'
import Label10 from '../images/label_10.png'
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
import Blank from '../images/blank.png'
import EmojiPicker from "emoji-picker-react";

const positions = [
  "top-left",
  "top-center",
  "top-right",
  "middle-left",
  "center",
  "middle-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const shapeImages = {
  'rect': rectangleShape,
  'rect-pill': chorusShape,
  'circle': circleShape,
  'pentagon': starShape,
  'star': roundedStarShape,
  'ribbon': rectangleRibbonShape
};

export default function LabelEditor() {
  const location = useLocation();
  const { type } = location.state || { type: 'labels' };
  const [active, setActive] = useState('desktop');
  const [open, setOpen] = useState(true);
  const [designOpen, setDesignOpen] = useState(true);
  const [selected, setSelected] = useState("top-left");
  const [startPeriod, setStartPeriod] = useState("AM");
  const [fillType, setFillType] = useState("gradient");
  const [color1, setColor1] = useState('#004AB8');
  const [color2, setColor2] = useState('#CB72FF');
  const [textColor, setTextColor] = useState('#ffffff');
  const [shape, setShape] = useState('rect');
  const [labelType, setLabelType] = useState(type === 'labels' ? 'shape' : 'image');
  const [selectedImageUrl, setSelectedImageUrl] = useState(type === 'badges' ? Label6 : TrustBadge1);
  const [previewPage, setPreviewPage] = useState("collection");
  const [productAlign, setProductAlign] = useState("left");
  const [selectedDropdown, setSelectedDropdown] = useState("above-title");
  const [selectedDisplayType, setSelectedDisplayType] = useState('horizontal');
  const [badgeWidth, setBadgeWidth] = useState(90);
  const [badgeHeight, setBadgeHeight] = useState(35);
  const [badgeRadius, setBadgeRadius] = useState(0);
  const [badgeOpacity, setBadgeOpacity] = useState(100);
  const [badgeMargin, setBadgeMargin] = useState(0);
  const [badgePadding, setBadgePadding] = useState(0);
  const [labelText, setLabelText] = useState("👔Nike vendor");
  const [enableCustomCss, setEnableCustomCss] = useState(false);
  const [customCss, setCustomCss] = useState('');
  const [openVariableMenu, setOpenVariableMenu] = useState(false);
  const [fontFamily, setFontFamily] = useState("Poppins");
  const [openFontsMenu, setOpenFontsMenu] = useState(false);
  const [openAlignMenu, setOpenAlignMenu] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [isTooltipEnabled, setIsTooltipEnabled] = useState(false);
  const [isActionLinkEnabled, setIsActionLinkEnabled] = useState(false);
  const [actionLinkUrl, setActionLinkUrl] = useState("");
  const [labelTooltip, setLabelTooltip] = useState("");
  const [visibilityType, setVisibilityType] = useState("");
  const [dailyRecurringTime, setDailyRecurringTime] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("11:00");
  const [endPeriod, setEndPeriod] = useState("AM");
  const alignMenuRef = useRef(null);
  const fontMenuRef = useRef(null);
  const emojiMenuRef = useRef(null);
  const variableMenuRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      " ",
      "+"
    )}&display=swap`;
    document.head.appendChild(link);
  }, [fontFamily]);

  const style = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    textAlign: alignment,
    fontFamily: fontFamily,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    wordBreak: "break-word",
    lineHeight: 1.2,
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        alignMenuRef.current &&
        !alignMenuRef.current.contains(event.target) &&
        fontMenuRef.current &&
        !fontMenuRef.current.contains(event.target) &&
        emojiMenuRef.current &&
        !emojiMenuRef.current.contains(event.target) &&
        variableMenuRef.current &&
        !variableMenuRef.current.contains(event.target)
      ) {
        setOpenAlignMenu(false);
        setOpenVariableMenu(false);
        setOpenFontsMenu(false);
        setShowPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiClick = (emojiData) => {
    setLabelText((prev) => {
      if (!prev) {
        return emojiData.emoji;
      }
      return `${prev} ${emojiData.emoji}`;
    });

    setShowPicker(false);
  };

  const readymadeImages = [
    // { id: 'free', url: Label1 },
    // { id: 'special', url: Label2 },
    // { id: 'offer', url: Label3 },
    // { id: 'sale', url: Label4 },
    // { id: 'great', url: Label5 },
    { id: 'label6', url: Label6 },
    { id: 'label7', url: Label7 },
    { id: 'label8', url: Label8 },
    { id: 'label9', url: Label9 },
    { id: 'label10', url: Label10 },
    { id: 'label12', url: Label12 },
    { id: 'label13', url: Label13 },
    { id: 'label14', url: Label14 },
    { id: 'label15', url: Label15 },
    { id: 'label16', url: Label16 },
    { id: 'label17', url: Label17 },
    { id: 'label18', url: Label18 },
    { id: 'label19', url: Label19 },
    { id: 'label20', url: Label20 },
    { id: 'label21', url: Label21 },
    { id: 'label22', url: Label22 },
    { id: 'label23', url: Label23 },
    { id: 'label24', url: Label24 },
    { id: 'label25', url: Label25 },
  ];

  const badges = [
    { id: 'trustBadge1', url: TrustBadge1 },
    { id: 'trustBadge2', url: TrustBadge2 },
    { id: 'trustBadge3', url: TrustBadge3 },
    { id: 'trustBadge4', url: TrustBadge4 },
    { id: 'trustBadge5', url: TrustBadge5 },
    { id: 'trustBadge6', url: TrustBadge6 },
    { id: 'trustBadge7', url: TrustBadge7 },
    { id: 'trustBadge8', url: TrustBadge8 },
    { id: 'trustBadge9', url: TrustBadge9 },
    { id: 'trustBadge10', url: TrustBadge10 },
    { id: 'trustBadge11', url: TrustBadge11 },
    { id: 'trustBadge12', url: TrustBadge12 },
    { id: 'trustBadge13', url: TrustBadge13 },
    { id: 'trustBadge14', url: TrustBadge14 },
    { id: 'trustBadge15', url: TrustBadge15 },
    { id: 'trustBadge16', url: TrustBadge16 },
    { id: 'trustBadge17', url: TrustBadge17 },
    { id: 'trustBadge18', url: TrustBadge18 },
    { id: 'trustBadge19', url: TrustBadge19 },
    { id: 'trustBadge20', url: TrustBadge20 },
    { id: 'trustBadge21', url: TrustBadge21 },
    { id: 'trustBadge22', url: TrustBadge22 },
    { id: 'trustBadge23', url: TrustBadge23 },
    { id: 'trustBadge24', url: TrustBadge24 },
    { id: 'trustBadge25', url: TrustBadge25 },
    { id: 'trustBadge26', url: TrustBadge26 },
    { id: 'trustBadge27', url: TrustBadge27 },
    { id: 'trustBadge28', url: TrustBadge28 },
    { id: 'trustBadge29', url: TrustBadge29 },
    { id: 'trustBadge30', url: TrustBadge30 },
    { id: 'trustBadge31', url: TrustBadge31 },
    { id: 'trustBadge32', url: TrustBadge32 },
    { id: 'trustBadge33', url: TrustBadge33 },
    { id: 'trustBadge34', url: TrustBadge34 },
    { id: 'trustBadge35', url: TrustBadge35 },
  ];

  const findTrustImage = type === 'trustBadges' ? badges : readymadeImages

  const handleDrop = (event) => {
    const files = event.detail?.files || event.target?.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImageUrl(e.target.result)
        setLabelType('image');
      };

      reader.readAsDataURL(file);
    }
  };

  const getPositionClasses = (pos) => {
    const map = {
      "top-left": "top-0 left-0",
      "top-center": "top-0 left-1/2 -translate-x-1/2",
      "top-right": "top-0 right-0",
      "middle-left": "top-1/2 left-0 -translate-y-1/2",
      "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "middle-right": "top-1/2 right-3 -translate-y-1/2",
      "bottom-left": "bottom-0 left-0",
      "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
      "bottom-right": "bottom-0 right-0",
    };
    return map[pos] || "top-0 left-0";
  };

  const getProductLabelAlign = () => {
    switch (productAlign) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      default:
        return "justify-center";
    }
  };

  const labelPositionsDropdown = [
    { id: 'below-price', label: 'Below product price', className: 'bottom-left' },
    { id: 'above-price', label: 'Above product price', className: 'top-right' },
    { id: 'above-title', label: 'Above product title', className: 'top-left' },
    { id: 'below-title', label: 'Below product title', className: 'bottom-right' },
    { id: 'before-title', label: 'Before product title', className: 'middle-left' },
    { id: 'after-title', label: 'After product title', className: 'middle-right' },
    { id: 'before-price', label: 'Before product price', className: 'top-center' },
    { id: 'after-price', label: 'After product price', className: 'bottom-center' },
  ];

  const displayTypeOptions = [
    { id: 'horizontal', label: 'Horizontal' },
    { id: 'vertical', label: 'Vertical' }
  ];

  const parseCustomCss = (cssText) => {
    if (!enableCustomCss || !cssText) return {};

    return cssText.split(';').reduce((acc, rule) => {
      const [key, value] = rule.split(':');
      if (!key || !value) return acc;

      const jsKey = key
        .trim()
        .replace(/-([a-z])/g, (_, char) => char.toUpperCase());

      acc[jsKey] = value.trim();
      return acc;
    }, {});
  };

  return (
    <s-page heading="Seliqo Label" inlineSize="large">
      <div className="flex items-center justify-center md:justify-start gap-2 py-3">
        <div className="w-[120px] md:w-[250px]">
          <s-text-field
            placeholder={
              type === 'labels'
                ? 'Offer label'
                : type === 'badges'
                  ? 'Offer badge'
                  : type === 'labelGroup'
                    ? 'Label group'
                    : type === 'badgeGroup'
                      ? 'Badge group'
                      : ''
            }
          />
        </div>
        <div className="w-[120px] md:w-[250px]">
          <s-number-field placeholder="1" min={0} max={100} />
        </div>

        <s-badge tone="success">Active</s-badge>
      </div>

      <div className="flex flex-wrap bg-white border rounded-xl gap-5 p-3 md:p-5">

        {/* LEFT PANEL */}
        <div>
          <div className="w-full md:w-[370px] 
           overflow-y-auto border rounded-xl">
            <p className='p-3 font-bold'>
              {type === 'badgeGroup'
                ? 'Badge group editor'
                : type === 'labelGroup'
                  ? 'Label group editor'
                  : type === 'badges'
                    ? 'Badge editor'
                    : type === 'labels'
                      ? 'Label editor'
                      : null}
            </p>
            <div className="overflow-hidden border-b">
              <div
                className="bg-[#F3F3F3] flex justify-between p-4 cursor-pointer"
                onClick={() => setDesignOpen(!designOpen)}
              >
                <div className="flex gap-1 items-center">
                  <s-icon type="paint-brush-flat" />
                  <b>
                    {type === 'labels'
                      ? 'Label design setting'
                      : type === 'badges'
                        ? 'Badge design setting'
                        : type === 'labelGroup'
                          ? 'Label group design setting'
                          : type === 'badgeGroup'
                            ? 'Badge group design setting'
                            : ''}
                  </b>
                </div>
                <div className={`transition-transform duration-300 ${designOpen ? "rotate-180" : ""}`}>
                  <s-icon type="chevron-down" />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${designOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className='p-3'>
                  <p className='mb-3 font-bold'>{
                    type === 'labelGroup'
                      ? 'Add created label'
                      : type === 'badgeGroup'
                        ? 'Add created badge'
                        : 'Shapes Design'
                  }
                  </p>
                  {(type === 'badgeGroup' && type === 'labelGroup') ?
                    <div className="grid grid-cols-5 gap-3 p-2 max-h-[150px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                      <div className='min-w-[56px] h-[56px]'>
                        <s-drop-zone
                          accessibilityLabel="Upload image"
                          accept=".jpg,.png,.gif"
                          onChange={handleDrop}
                          onDrop={handleDrop}
                        />
                      </div>

                      {findTrustImage.map((img) => (
                        <div
                          key={img.id}
                          onClick={() => setSelectedImageUrl(img.url)}
                          className={`min-w-[56px] h-[56px] border-2 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden ${selectedImageUrl === img.url ? 'border-blue-600 bg-blue-50' : 'border-gray-100'
                            }`}
                        >
                          <img src={img.url} alt={img.id} className="w-10 h-10 object-contain" />
                        </div>
                      ))}
                    </div>
                    : <div className='border rounded-lg mb-3'>
                      <div className="flex gap-1 mb-4 border-b p-2">
                        {type === 'labels' && <button
                          onClick={() => setLabelType('shape')}
                          className={`${labelType === 'shape' ? 'bg-gray-200' : 'text-gray-500'} px-3 py-1 rounded-md text-[10px] md:text-[12px] font-medium transition-all`}
                        >
                          Shape label
                        </button>}
                        <button
                          onClick={() => setLabelType('image')}
                          className={`${labelType === 'image' ? 'bg-gray-200' : 'text-gray-500'} px-3 py-1 rounded-md text-[10px] md:text-[12px] font-medium transition-all`}
                        >

                          {type === 'labels'
                            ? 'Readymade image label'
                            : type === 'badges'
                              ? 'Readymade image label'
                              : type === 'labelGroup'
                                ? 'Readymade image label'
                                : type === 'badgeGroup'
                                  ? 'Readymade image badge'
                                  : ''}
                        </button>
                      </div>

                      {labelType === 'shape' ? (
                        <>
                          {type === 'labels' && <div className="grid grid-cols-5 gap-3 p-2 max-h-[150px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                            {Object.keys(shapeImages).map((s) => (
                              <div
                                key={s}
                                onClick={() => setShape(s)}
                                className={`min-w-[56px] h-[56px] border-2 rounded-lg flex items-center justify-center cursor-pointer transition-all ${shape === s ? 'border-blue-600 bg-blue-50' : 'border-gray-100 hover:border-gray-300'
                                  }`}
                              >
                                <div
                                  style={{
                                    width: '36px',
                                    height: '36px',
                                    // background: `linear-gradient(90deg, ${color1}, ${color2})`,
                                    background:
                                      fillType === "solid"
                                        ? color1
                                        : fillType === "gradient"
                                          ? `linear-gradient(90deg, ${color1}, ${color2})`
                                          : "transparent",

                                    WebkitMaskImage: `url(${shapeImages[s]})`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskImage: `url(${shapeImages[s]})`,
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                  }}
                                />
                              </div>
                            ))}
                          </div>}
                        </>
                      ) : (
                        <div className="grid grid-cols-5 gap-3 p-2 max-h-[150px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                          <div className='min-w-[56px] h-[56px]'>
                            <s-drop-zone
                              accessibilityLabel="Upload image"
                              accept=".jpg,.png,.gif"
                              onChange={handleDrop}
                              onDrop={handleDrop}
                            />
                          </div>

                          {findTrustImage.map((img) => (
                            <div
                              key={img.id}
                              onClick={() => setSelectedImageUrl(img.url)}
                              className={`min-w-[56px] h-[56px] border-2 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden ${selectedImageUrl === img.url ? 'border-blue-600 bg-blue-50' : 'border-gray-100'
                                }`}
                            >
                              <img src={img.url} alt={img.id} className="w-10 h-10 object-contain" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>}

                  {labelType === 'shape' &&
                    <div>
                      <div className='my-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className='mb-1 font-bold'>
                          {type === 'labels'
                            ? 'Label text'
                            : type === 'badges'
                              ? 'Badge text'
                              : type === 'badgeGroup'
                                ? 'Badge text'
                                : type === 'labelGroup'
                                  ? 'Label text'
                                  : ''}
                        </p>
                        <div className='border rounded-lg'>
                          <div className='flex gap-[6px] border-b p-2 bg-[#FAFAFA] items-center'>
                            <button onClick={() => setBold((prev) => !prev)}><s-icon type='text-bold' /></button>
                            <button onClick={() => setItalic((prev) => !prev)}><s-icon type='text-italic' /></button>
                            <button onClick={() => setUnderline((prev) => !prev)}><s-icon type='text-underline' /></button>
                            <div ref={alignMenuRef} className="relative inline-block">
                              <button
                                onClick={() => setOpenAlignMenu((prev) => !prev)}
                                className="cursor-pointer text-[12px] flex items-center"
                              >
                                <s-icon type="text-align-left" /> <s-icon type="caret-down" />
                              </button>

                              {openAlignMenu && (
                                <div
                                  style={{ scrollbarWidth: "thin" }}
                                  className="absolute top-[110%] left-[-30px] w-[100px] h-[120px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-[0_4px_14px_rgba(0,0,0,0.12)] z-[1000]"
                                >
                                  {[
                                    { align: "left", label: "Left", icon: "text-align-left" },
                                    { align: "center", label: "Center", icon: "text-align-center" },
                                    { align: "right", label: "Right", icon: "text-align-right" },
                                  ].map((item, index) => (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setAlignment(item.align);
                                        setOpenAlignMenu(false);
                                      }}
                                      style={{ padding: "5px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f3f3")}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                    >
                                      <s-icon type={item.icon} />
                                      <span style={{ fontSize: "12px" }}>{item.label}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div ref={fontMenuRef} className="relative inline-block">
                              <button
                                onClick={() => setOpenFontsMenu((prev) => !prev)}
                                className="cursor-pointer text-[12px] flex items-center"
                              >
                                Poppins <s-icon type='caret-down' />
                              </button>

                              {openFontsMenu && (
                                <div
                                  style={{ scrollbarWidth: 'thin' }}
                                  className="absolute top-[110%] left-[-30px] w-[150px] h-[250px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-[0_4px_14px_rgba(0,0,0,0.12)] z-[1000]"
                                >
                                  {[
                                    { fontFamily: "Inter" },
                                    { fontFamily: "Roboto" },
                                    { fontFamily: "Helvetica Neue" },
                                    { fontFamily: "Arial" },
                                    { fontFamily: "Montserrat" },
                                    { fontFamily: "Lato" },
                                    { fontFamily: "Open Sans" },
                                    { fontFamily: "Poppins" },
                                    { fontFamily: "Source Sans Pro" },
                                    { fontFamily: "Nunito" },
                                    { fontFamily: "Ubuntu" },
                                    { fontFamily: "Raleway" },
                                    { fontFamily: "Merriweather" },
                                    { fontFamily: "Playfair Display" },
                                    { fontFamily: "Roboto Slab" },
                                    { fontFamily: "Oswald" },
                                    { fontFamily: "Titillium Web" },
                                    { fontFamily: "Fira Sans" },
                                    { fontFamily: "Quicksand" },
                                    { fontFamily: "Cabin" },
                                  ].map((item, index) => (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setFontFamily(item.fontFamily);
                                        setOpenFontsMenu(false);
                                      }}
                                      style={{ padding: "5px 10px", cursor: "pointer", fontFamily: item.fontFamily }}
                                      onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f3f3")}
                                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                    >
                                      {item.fontFamily}
                                    </div>
                                  ))}
                                </div>
                              )}

                            </div>
                            <div ref={emojiMenuRef} className="relative inline-block">
                              <button
                                onClick={() => setShowPicker((prev) => !prev)}
                              >
                                <s-icon type="smiley-happy" />
                              </button>

                              {showPicker && (
                                <div
                                  className="absolute top-[110%] left-[-220px] z-[1000]"
                                >
                                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                                </div>
                              )}
                            </div>
                            <div ref={variableMenuRef} className="relative inline-block">
                              <button
                                onClick={() => setOpenVariableMenu((prev) => !prev)}
                                className="px-2 py-[2px] rounded-md border border-gray-300 bg-white cursor-pointer text-[12px]"
                              >
                                Add variable
                              </button>

                              {openVariableMenu && (
                                <div style={{ scrollbarWidth: 'thin' }}
                                  className="absolute top-[110%] left-[-30px] w-[150px] h-[250px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-[0_4px_14px_rgba(0,0,0,0.12)] z-[1000]"
                                >
                                  {[
                                    { title: "Product vendor", example: "ABC vendor" },
                                    { title: "Percentage discount", example: "10% off" },
                                    { title: "Amount discount", example: "$10 off" },
                                    { title: "Price", example: "Only $10" },
                                    { title: "Rating", example: "5 star" },
                                    { title: "Number of review", example: "500 reviews" },
                                    { title: "Remaining stock", example: "only 5 left" },
                                    { title: "Product metafield", example: "100% pure" },
                                  ].map((item, index) => (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setLabelText(item.example);
                                        setOpenVariableMenu(false);
                                      }}
                                      style={{
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                      }}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.background = "#f3f3f3")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.background = "transparent")
                                      }
                                    >
                                      <div style={{ fontWeight: 500, fontSize: "12px" }}>
                                        {item.title}
                                      </div>
                                      <div style={{ fontSize: "11px", color: "#6d6d6d" }}>
                                        Example: {item.example}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <textarea
                              ref={textareaRef}
                              value={labelText}
                              onChange={(e) => setLabelText(e.target.value)}
                              rows="3"
                              cols="40"
                              className="outline-none p-2"
                            ></textarea>
                          </div>
                        </div>
                        <div className='mt-3'>
                          <s-clickable-chip>Note: If {labelText} not exists on selected product</s-clickable-chip>
                        </div>
                      </div>

                      <div className='mb-3'><s-divider /></div>
                      <p className='font-bold mb-3'>Color fill</p>

                      <div className="flex mb-4">
                        <div className="inline-flex border border-gray-300 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => setFillType("solid")}
                            className={`px-3 py-1 text-[12px] font-medium transition
                            ${fillType === "solid"
                                ? "bg-[#EBEBEB] text-black"
                                : "bg-white text-gray-700"
                              }`}
                          >
                            Solid fill
                          </button>

                          <button
                            onClick={() => setFillType("gradient")}
                            className={`px-3 py-1 text-[12px] font-medium transition
                            ${fillType === "gradient"
                                ? "bg-[#EBEBEB] text-black"
                                : "bg-white text-gray-700"
                              }`}
                          >
                            Gradient fill
                          </button>
                        </div>
                      </div>

                      {fillType === "solid" && (
                        <>
                          <div className="flex items-center gap-3 mb-3">
                            <input
                              type="color"
                              value={color1}
                              onChange={(e) => setColor1(e.target.value)}
                              className="w-12 h-12 bg-white color-picker-custom cursor-pointer"
                            />
                            <div>
                              <p className="text-[13px] font-medium">Background color</p>
                              <p className="text-[12px] uppercase text-gray-500">{color1}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <input
                              type="color"
                              value={textColor}
                              onChange={(e) => setTextColor(e.target.value)}
                              className="w-12 h-12 bg-white color-picker-custom cursor-pointer"
                            />
                            <div>
                              <p className="text-[13px] font-medium">Text color</p>
                              <p className="text-[12px] uppercase text-gray-500">{textColor}</p>
                            </div>
                          </div>
                        </>
                      )}

                      {fillType === "gradient" && (
                        <>
                          <div className="flex items-center gap-3 mb-3">
                            <input
                              type="color"
                              value={color1}
                              onChange={(e) => setColor1(e.target.value)}
                              className="w-12 h-12 bg-white color-picker-custom cursor-pointer"
                            />
                            <div>
                              <p className="text-[13px] font-medium">Start background</p>
                              <p className="text-[12px] uppercase text-gray-500">{color1}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <input
                              type="color"
                              value={color2}
                              onChange={(e) => setColor2(e.target.value)}
                              className="w-12 h-12 bg-white color-picker-custom cursor-pointer"
                            />
                            <div>
                              <p className="text-[13px] font-medium">End background</p>
                              <p className="text-[12px] uppercase text-gray-500">{color2}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <input
                              type="color"
                              value={textColor}
                              onChange={(e) => setTextColor(e.target.value)}
                              className="w-12 h-12 bg-white color-picker-custom cursor-pointer"
                            />
                            <div>
                              <p className="text-[13px] font-medium">Text color</p>
                              <p className="text-[12px] uppercase text-gray-500">{textColor}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  }

                  {(type !== 'badgeGroup' && type !== 'labelGroup') &&
                    <>
                      <div className='mb-3'><s-divider /></div>
                      <p className='font-bold mb-2'>Interaction setting</p>
                      <div className='mb-2'>
                        <s-checkbox
                          label="Add action link"
                          checked={isActionLinkEnabled}
                          onChange={(e) => setIsActionLinkEnabled(e.target.checked)}
                        />
                        {isActionLinkEnabled && (
                          <s-email-field
                            placeholder="https://www.yourstore.com"
                            value={actionLinkUrl}
                            onChange={(e) => setActionLinkUrl(e.target.value)}
                          />
                        )}
                      </div>
                      <div className='mb-3'>
                        <s-checkbox
                          label="Show tooltip for label"
                          checked={isTooltipEnabled}
                          onChange={(e) => setIsTooltipEnabled(e.target.checked)}
                        />
                        {isTooltipEnabled && (
                          <s-text-field
                            placeholder="Add tooltip message here"
                            value={labelTooltip}
                            onChange={(e) => setLabelTooltip(e.target.value)}
                          />
                        )}
                      </div>
                    </>
                  }
                  <div className='my-3'><s-divider /></div>
                  <div className='mb-3'>
                    <p className="font-semibold mb-2">
                      {type === 'labels' ? 'Label position' : type === 'badges' ? 'Badge position' : type === 'badgeGroup' ? 'Badge position' : type === 'labelGroup' ? 'Label position' : ''}
                    </p>
                    {(previewPage === "collection" || previewPage === 'product') ? (
                      <div className="relative bg-[#F0ECE8] p-4 rounded-xl w-[260px]">
                        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                          <img
                            src={productFrame}
                            alt="product"
                            className="h-32 opacity-80"
                          />
                        </div>

                        <div className="relative z-10 grid grid-cols-3 gap-3">
                          {positions.map((pos) => (
                            <button
                              key={pos}
                              onClick={() => setSelected(pos)}
                              className={`relative h-16 rounded-lg border transition-all
                          ${selected === pos
                                  ? "bg-white"
                                  : "border-transparent bg-white/70 hover:border-gray-300"
                                }
                         `}
                            >
                              {selected === pos && (
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center">
                                  <img src={statusActivation} alt="status" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className='mb-3'>
                          <p className='mb-1'>
                            {type === 'labels' ? 'Label to display' : type === 'badges' ? 'Badge to display' : type === 'badgeGroup' ? 'Badge to display' : type === 'labelGroup' ? 'Label to display' : ''}
                          </p>
                          <s-select
                            value={selectedDropdown}
                            onChange={(val) => {
                              setSelectedDropdown(val);
                              const pos = labelPositionsDropdown.find(p => p.id === val);
                              if (pos) setSelected(pos.className);
                            }}
                          >
                            {labelPositionsDropdown.map((pos) => (
                              <s-option key={pos.id} value={pos.id}>
                                {pos.label}
                              </s-option>
                            ))}
                          </s-select>
                        </div>
                        <div className='mb-3'>
                          <p className='mb-1'>
                            Display type
                          </p>
                          <s-select
                            value={selectedDisplayType}
                            onChange={(val) => {

                              setSelectedDisplayType(val);
                              const pos = displayTypeOptions.find(p => p.id === val);
                              if (pos) setSelected(pos.className);
                            }}
                          >
                            {displayTypeOptions.map((pos) => (
                              <s-option key={pos.id} value={pos.id}>
                                {pos.label}
                              </s-option>
                            ))}
                          </s-select>
                        </div>
                        <div className="bg-gray-100 rounded-xl p-1 flex">
                          <button
                            onClick={() => setProductAlign("left")}
                            className={`flex-1 h-8 rounded-lg flex items-center justify-center ${productAlign === "left" ? "bg-white shadow-sm" : ""
                              }`}
                          >
                            <s-icon type="arrow-left" />
                          </button>

                          <button
                            onClick={() => setProductAlign("center")}
                            className={`flex-1 h-8 rounded-lg flex items-center justify-center ${productAlign === "center" ? "bg-white shadow-sm" : ""
                              }`}
                          >
                            <img src={Blank} className="w-5 h-5" />
                          </button>

                          <button
                            onClick={() => setProductAlign("right")}
                            className={`flex-1 h-8 rounded-lg flex items-center justify-center ${productAlign === "right" ? "bg-white shadow-sm" : ""
                              }`}
                          >
                            <s-icon type="arrow-right" />
                          </button>
                        </div>

                      </div>
                    )}
                  </div>
                  {labelType === 'shape' &&
                    <>
                      <div className='mb-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className="font-semibold mb-4">Style setting</p>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          <div>
                            <p className="mb-1">Badge width</p>
                            <s-number-field
                              value={badgeWidth}
                              suffix="Px"
                              onChange={(e) => setBadgeWidth(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Badge height</p>
                            <s-number-field
                              value={badgeHeight}
                              suffix="Px"
                              onChange={(e) => setBadgeHeight(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Rounded corner</p>
                            <s-number-field
                              value={badgeRadius}
                              suffix="Px"
                              onChange={(e) => setBadgeRadius(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Badge opacity</p>
                            <s-number-field
                              value={badgeOpacity}
                              suffix="%"
                              onChange={(e) => setBadgeOpacity(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Margin</p>
                            <s-number-field
                              value={badgeMargin}
                              suffix="Px"
                              onChange={(e) => setBadgeMargin(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Padding</p>
                            <s-number-field
                              value={badgePadding}
                              suffix="Px"
                              onChange={(e) => setBadgePadding(Number(e.target.value))}
                            />

                          </div>
                        </div>
                      </div>
                      <div className='mb-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className="font-semibold mb-2">Custom</p>
                        <s-checkbox
                          label="Custom CSS"
                          checked={enableCustomCss}
                          onChange={(e) => setEnableCustomCss(e.target.checked)}
                        />
                        {enableCustomCss && <s-text-area
                          value={customCss}
                          placeholder="Enter your custom css here"
                          rows={4}
                          onInput={(e) => setCustomCss(e.target.value)}
                        />}
                        {enableCustomCss && (
                          <p className="text-[11px] text-gray-500 mt-1">
                            Example: font-size:14px; text-transform:uppercase;
                          </p>
                        )}
                      </div>
                    </>
                  }
                  {(type === 'badgeGroup' && type === 'labelGroup') &&
                    <>
                      <div className='mb-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className="font-semibold mb-4">Style setting</p>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          <div>
                            <p className="mb-1">Gap between the badge</p>
                            <s-number-field
                              value={badgeWidth}
                              suffix="Px"
                              onChange={(e) => setBadgeWidth(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Badge height</p>
                            <s-number-field
                              value={badgeHeight}
                              suffix="Px"
                              onChange={(e) => setBadgeHeight(Number(e.target.value))}
                            />

                          </div>

                          <div>
                            <p className="mb-1">Margin</p>
                            <s-number-field
                              value={badgeMargin}
                              suffix="Px"
                              onChange={(e) => setBadgeMargin(Number(e.target.value))}
                            />

                          </div>
                        </div>
                      </div>
                      <div className='mb-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className="font-semibold mb-2">Custom</p>
                        <s-checkbox
                          label="Custom CSS"
                          checked={enableCustomCss}
                          onChange={(e) => setEnableCustomCss(e.target.checked)}
                        />
                        {enableCustomCss && <s-text-area
                          value={customCss}
                          placeholder="Enter your custom css here"
                          rows={4}
                          onInput={(e) => setCustomCss(e.target.value)}
                        />}
                        {enableCustomCss && (
                          <p className="text-[11px] text-gray-500 mt-1">
                            Example: font-size:14px; text-transform:uppercase;
                          </p>
                        )}
                      </div>
                    </>
                  }
                  {(type !== 'badgeGroup' && type !== 'labelGroup') &&
                    <>
                      <div className='mb-3'><s-divider /></div>
                      <div className='mb-3'>
                        <p className="font-semibold mb-2">Visibility date</p>
                        <div className="flex gap-6 items-center mb-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visibility"
                              value="always"
                              checked={visibilityType === "always"}
                              onChange={(e) => setVisibilityType(e.target.value)}
                              className="accent-blue-600"
                            />
                            <span className="text-sm">Always visible</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="visibility"
                              value="specific"
                              checked={visibilityType === "specific"}
                              onChange={(e) => setVisibilityType(e.target.value)}
                              className="accent-blue-600"
                            />
                            <span className="text-sm">Specific dates</span>
                          </label>
                        </div>
                        {visibilityType === "specific" && (
                          <>
                            <div className="mb-3">
                              <p className="mb-1">Start date</p>
                              <s-date-field
                                defaultView="2025-09"
                                defaultValue="2025-09-01"
                              />
                            </div>

                            <div className="mb-3">
                              <p className="mb-1">End date</p>
                              <s-date-field
                                defaultView="2025-09"
                                defaultValue="2025-09-01"
                              />
                            </div>
                          </>
                        )}
                        <s-checkbox
                          label="Daily recurring timer"
                          checked={dailyRecurringTime}
                          onChange={(e) => setDailyRecurringTime(e.target.checked)}
                        />
                        {/* Time */}
                        {dailyRecurringTime && (
                          <div className="grid grid-cols-2 gap-4 mt-2">
                            {/* Start */}
                            <div>
                              <p className="mb-1 font-medium">Start time</p>
                              <div className="flex border border-[#B1B1B1] rounded-lg h-[38px] overflow-hidden">
                                <input
                                  value={startTime}
                                  onChange={(e) => setStartTime(e.target.value)}
                                  className="flex-1 px-3 outline-none text-sm"
                                />

                                <div className="w-px bg-[#B1B1B1]" />

                                <div className="w-[70px] flex items-center justify-between px-2">
                                  <span className="font-medium text-sm">{startPeriod}</span>
                                  <div className="flex flex-col">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setStartPeriod(startPeriod === "AM" ? "PM" : "AM")
                                      }
                                      className="h-4 opacity-70 hover:opacity-100"
                                    >
                                      <s-icon type="chevron-up" className="w-3 h-3" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setStartPeriod(startPeriod === "AM" ? "PM" : "AM")
                                      }
                                      className="h-4 opacity-70 hover:opacity-100"
                                    >
                                      <s-icon type="chevron-down" className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* End */}
                            <div>
                              <p className="mb-1 font-medium">End time</p>
                              <div className="flex border border-[#B1B1B1] rounded-lg h-[38px] overflow-hidden">
                                <input
                                  value={endTime}
                                  onChange={(e) => setEndTime(e.target.value)}
                                  className="flex-1 px-3 outline-none text-sm"
                                />

                                <div className="w-px bg-[#B1B1B1]" />

                                <div className="w-[70px] flex items-center justify-between px-2">
                                  <span className="font-medium text-sm">{endPeriod}</span>
                                  <div className="flex flex-col">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setEndPeriod(endPeriod === "AM" ? "PM" : "AM")
                                      }
                                      className="h-4 opacity-70 hover:opacity-100"
                                    >
                                      <s-icon type="chevron-up" className="w-3 h-3" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setEndPeriod(endPeriod === "AM" ? "PM" : "AM")
                                      }
                                      className="h-4 opacity-70 hover:opacity-100"
                                    >
                                      <s-icon type="chevron-down" className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div
                className="bg-[#F3F3F3] flex justify-between p-4 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <div className="flex gap-1 items-center">
                  <s-icon type="product" />
                  <b>Display</b>
                </div>

                <div
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                    }`}
                >
                  <s-icon type="chevron-down" />
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-4 py-3 space-y-3">
                  <div>
                    <p>Product to display</p>
                    <s-select>
                      <s-option value="1">All product</s-option>
                      <s-option value="2">Specific collection</s-option>
                      <s-option value="3">Specific product</s-option>
                      <s-option value="4">Product tag</s-option>
                      <s-option value="5">Condition</s-option>
                    </s-select>
                  </div>

                  <div className='mb-3'><s-divider /></div>

                  <div>
                    <p className="font-bold mb-2">
                      {type === 'labels'
                        ? 'Label display'
                        : type === 'badges'
                          ? 'Badge display'
                          : type === 'badgeGroup'
                            ? 'Badge display'
                            : type === 'labelGroup'
                              ? 'Label display'
                              : ''}
                    </p>

                    <p className="mb-1 font-semibold">Device</p>
                    <div className="flex gap-5 md:gap-16">
                      <s-checkbox label="Desktop" />
                      <s-checkbox label="Mobile" />
                    </div>

                    <p className="mt-3 mb-1 font-semibold">Page</p>
                    <div className="flex gap-5 md:gap-16">
                      <s-checkbox label="Home page" />
                      <s-checkbox label="Product page" />
                    </div>
                    <div className="flex gap-5 md:gap-10">
                      <s-checkbox label="Collection page" />
                      <s-checkbox label="Cart page" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-[#F6F6F7] overflow-y-auto border rounded-xl flex flex-col items-center">
          <div className="w-full border-b bg-white px-3 md:px-4 py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

              <div className="flex items-center justify-between md:justify-start gap-3">
                <p className="font-bold text-black">
                  Preview
                </p>

                <div className="flex items-center gap-1 bg-[#ebebeb] p-1 rounded-md md:hidden">
                  <div
                    onClick={() => setActive("desktop")}
                    className={`cursor-pointer p-1 rounded-md transition-all ${active === "desktop" ? "bg-white shadow-sm" : "opacity-60"
                      }`}
                  >
                    <s-icon type="desktop" />
                  </div>
                  <div
                    onClick={() => setActive("mobile")}
                    className={`cursor-pointer p-1 rounded-md transition-all ${active === "mobile" ? "bg-white shadow-sm" : "opacity-60"
                      }`}
                  >
                    <s-icon type="mobile" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <s-button commandFor="customer-menu" class="collection-btn w-full md:w-auto">
                  <div className="flex items-center gap-1">
                    <s-icon
                      type={previewPage === "collection" ? "collection" : "product"}
                    />
                    <span className="text-[12px]">
                      {previewPage === "collection"
                        ? "Collection page"
                        : "Product page"}
                    </span>
                    <s-icon type="chevron-down" />
                  </div>
                </s-button>

                <s-menu id="customer-menu">
                  <s-button icon="collection" onClick={() => setPreviewPage("collection")}>
                    Collection page
                  </s-button>
                  <s-button icon="product" onClick={() => setPreviewPage("product")}>
                    Product page
                  </s-button>
                </s-menu>
              </div>

              <div className="hidden md:flex items-center gap-1 bg-[#ebebeb] p-1 rounded-md">
                <div
                  onClick={() => setActive("desktop")}
                  className={`cursor-pointer p-1 rounded-md transition-all ${active === "desktop" ? "bg-white shadow-sm" : "opacity-60"
                    }`}
                >
                  <s-icon type="desktop" />
                </div>
                <div
                  onClick={() => setActive("mobile")}
                  className={`cursor-pointer p-1 rounded-md transition-all ${active === "mobile" ? "bg-white shadow-sm" : "opacity-60"
                    }`}
                >
                  <s-icon type="mobile" />
                </div>
              </div>

            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out ${active === 'mobile' ? 'w-[320px] md:w-[375px] min-h-[667px] shadow-2xl border-[6px] border-gray-800 rounded-[3rem] mb-10 overflow-hidden bg-white mt-5' : 'w-full'}`}>
            <s-card>
              <div className={`space-y-4 bg-white rounded-2xl p-3 md:p-5 ${active === 'mobile' ? 'm-0' : 'm-2 md:m-5'}`}>
                {previewPage === "collection" && (
                  <>
                    <p className="font-semibold text-xl">Your products</p>

                    <div className={active === 'mobile' ? "grid grid-cols-2 gap-3" : "grid pb-4 grid-cols-2 md:grid-cols-4 gap-4"}>
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex-shrink-0">
                          <div className={`relative bg-[#E3EDFB] rounded-lg flex items-center justify-center overflow-hidden transition-all`}>
                            {type === 'labels' && <div
                              className={`absolute z-10 flex items-center transition-all duration-300 ${getPositionClasses(selected)}`}
                              style={{
                                width: `${badgeWidth}px`,
                                height: `${badgeHeight}px`,
                                opacity: badgeOpacity / 100,
                                margin: `${badgeMargin}px`,
                                padding: `${badgePadding}px`,
                                borderRadius: `${badgeRadius}px`,
                                ...(labelType === 'shape'
                                  ? {
                                    // background: `linear-gradient(90deg, ${color1}, ${color2})`,
                                    background:
                                      fillType === "solid"
                                        ? color1
                                        : fillType === "gradient"
                                          ? `linear-gradient(90deg, ${color1}, ${color2})`
                                          : "transparent",

                                    WebkitMaskImage: `url(${shapeImages[shape]})`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskImage: `url(${shapeImages[shape]})`,
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                  }
                                  : {
                                    background: 'transparent',
                                  }),
                              }}
                            >
                              {labelType === 'shape' ? (
                                <div
                                  className="w-full h-full flex items-center"
                                  style={{ color: textColor, textAlign: alignment }}
                                >
                                  <span
                                    tabIndex={isActionLinkEnabled && actionLinkUrl ? 0 : undefined}
                                    role={isActionLinkEnabled && actionLinkUrl ? "link" : undefined}
                                    onClick={() => {
                                      if (isActionLinkEnabled && actionLinkUrl) {
                                        window.open(actionLinkUrl, "_blank");
                                      }
                                    }}
                                    className={`
                                  ${active === 'mobile' ? 'text-[9px]' : 'text-[12px]'}
                                  w-full
                                  ${isActionLinkEnabled && actionLinkUrl ? 'cursor-pointer underline' : ''}
                                `}
                                    style={{
                                      fontFamily: fontFamily,
                                      lineHeight: '1.2',
                                      display: '-webkit-box',
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: 'vertical',
                                      wordBreak: 'break-word',
                                      ...parseCustomCss(customCss),
                                      ...style
                                    }}
                                  >
                                    {labelText}
                                  </span>
                                </div>
                              ) : (
                                selectedImageUrl && (
                                  <img src={selectedImageUrl} alt="label" className="max-w-full max-h-full object-contain" />
                                )
                              )}
                            </div>}

                            <img
                              src={productFrame}
                              alt="Demo product"
                              className={`w-full h-full object-contain transition-transform duration-300 hover:scale-105 ${active === 'mobile' ? 'p-6' : 'p-5 md:p-14'}`}
                            />
                          </div>

                          <div className="mt-3 space-y-1">
                            <div className='flex gap-5 items-center'>
                              {type === 'badges' && selectedImageUrl && <img src={selectedImageUrl} alt="label" className="w-12 h-12 object-contain" />}
                              <p className={`${active === 'mobile' ? 'text-[13px]' : 'text-[16px]'} font-semibold text-gray-900`}>
                                Demo product
                              </p>
                            </div>
                            <p className={`${active === 'mobile' ? 'text-[12px]' : 'text-gray-600'} font-medium`}>$16.00</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center pt-4 pb-2">
                      <s-button variant="primary" size={active === 'mobile' ? 'slim' : 'medium'}>View all</s-button>
                    </div>
                  </>
                )}
                {previewPage === "product" && (
                  <div
                    className={`grid ${active === "mobile" ? "grid-cols-1" : "grid-cols-2"} gap-6`}
                  >
                    <div className="relative bg-[#E3EDFB] rounded-xl flex items-center justify-center p-10">
                      <div
                        className={`absolute z-10 flex items-center transition-all duration-300 ${getPositionClasses(selected)}`}
                        style={{
                          width: `${badgeWidth}px`,
                          height: `${badgeHeight}px`,
                          opacity: badgeOpacity / 100,
                          margin: `${badgeMargin}px`,
                          padding: `${badgePadding}px`,
                          borderRadius: `${badgeRadius}px`,
                          ...(labelType === 'shape'
                            ? {
                              background:
                                fillType === "solid"
                                  ? color1
                                  : fillType === "gradient"
                                    ? `linear-gradient(90deg, ${color1}, ${color2})`
                                    : "transparent",

                              WebkitMaskImage: `url(${shapeImages[shape]})`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url(${shapeImages[shape]})`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }
                            : {
                              background: 'transparent',
                            }),
                        }}
                      >
                        {labelType === 'shape' ? (
                          <div
                            className="w-full h-full flex items-center"
                            style={{ color: textColor, textAlign: alignment }}
                          >
                            <span
                              tabIndex={isActionLinkEnabled && actionLinkUrl ? 0 : undefined}
                              role={isActionLinkEnabled && actionLinkUrl ? "link" : undefined}
                              onClick={() => {
                                if (isActionLinkEnabled && actionLinkUrl) {
                                  window.open(actionLinkUrl, "_blank");
                                }
                              }}
                              className={`
                                  ${active === 'mobile' ? 'text-[9px]' : 'text-[12px]'}
                                  w-full
                                  ${isActionLinkEnabled && actionLinkUrl ? 'cursor-pointer underline' : ''}
                                `}
                              style={{
                                fontFamily: fontFamily,
                                lineHeight: '1.2',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                wordBreak: 'break-word',
                                ...parseCustomCss(customCss),
                                ...style
                              }}
                            >
                              {labelText}
                            </span>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <img src={productFrame} className="max-w-full" />
                    </div>

                    <div className="space-y-3">
                      <p className="text-2xl font-bold">Demo product</p>
                      <p className="text-lg font-semibold">$16.00</p>
                      {(type === 'badges' || labelType === 'image') && <div className={`flex ${getProductLabelAlign()} mb-1`}>
                        <div
                          className="flex items-center"
                          style={{
                            width: `${badgeWidth}px`,
                            height: `${badgeHeight}px`,
                            opacity: badgeOpacity / 100,
                            margin: `${badgeMargin}px`,
                            padding: `${badgePadding}px`,
                            borderRadius: `${badgeRadius}px`,
                            ...(labelType === 'shape'
                              ? {
                                background:
                                  fillType === "solid"
                                    ? color1
                                    : fillType === "gradient"
                                      ? `linear-gradient(90deg, ${color1}, ${color2})`
                                      : "transparent",
                                WebkitMaskImage: `url(${shapeImages[shape]})`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url(${shapeImages[shape]})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                              }
                              : {
                                background: 'transparent',
                              }),
                          }}
                        >
                          {labelType === 'shape' ? (
                            <div className='w-full' style={{ color: textColor, textAlign: alignment }}>
                              <span
                                tabIndex={isActionLinkEnabled && actionLinkUrl ? 0 : undefined}
                                role={isActionLinkEnabled && actionLinkUrl ? "link" : undefined}
                                onClick={() => {
                                  if (isActionLinkEnabled && actionLinkUrl) {
                                    window.open(actionLinkUrl, "_blank");
                                  }
                                }}
                                className={`
                                  ${active === 'mobile' ? 'text-[9px]' : 'text-[12px]'}
                                  w-full
                                  ${isActionLinkEnabled && actionLinkUrl ? 'cursor-pointer underline' : ''}
                                `}
                                style={{
                                  fontFamily: fontFamily,
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  lineHeight: '1.2',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  wordBreak: 'break-word',
                                  ...parseCustomCss(customCss),
                                  ...style
                                }}
                              >
                                {labelText}
                              </span>
                            </div>
                          ) : (
                            selectedImageUrl && (
                              <img src={selectedImageUrl} alt="label" className="max-w-full max-h-full object-contain" />
                            )
                          )}
                        </div>
                      </div>}

                      <div className="space-y-4 max-w-[420px] pt-2">
                        <div>
                          <p className="mb-2 text-sm font-medium">Quantity</p>

                          <div className="inline-flex items-center border rounded-xl overflow-hidden">
                            <button className="px-4 py-2 text-lg hover:bg-gray-100">−</button>
                            <span className="px-4 py-2 text-sm font-medium">1</span>
                            <button className="px-4 py-2 text-lg hover:bg-gray-100">+</button>
                          </div>
                        </div>
                        <button
                          className="w-full border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition"
                        >
                          Add to cart
                        </button>
                        <button
                          className="w-full bg-black text-white rounded-xl py-3 text-sm font-medium hover:bg-black/90 transition"
                        >
                          Buy it now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </s-card>
          </div>
        </div>
      </div>
    </s-page>
  );
}
