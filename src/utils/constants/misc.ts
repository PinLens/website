import { Maximize2Icon, MousePointerClickIcon, RulerIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "启动应用",
        description: "应用启动后会在菜单栏显示图标，点击或按 Cmd+Ctrl+P 快速启动。",
        icon: Maximize2Icon,
    },
    {
        title: "选择区域",
        description: "拖拽创建选区，使用边角和边中间的控制点调整大小，点击确认。",
        icon: MousePointerClickIcon,
    },
    {
        title: "查看内容",
        description: "应用会创建一个新窗口显示选定区域的实时内容，可使用标尺、网格等工具。",
        icon: RulerIcon,
    },
] as const;

export const FEATURES = [
    {
        title: "区域选择",
        description: "灵活拖拽选择任意屏幕区域，支持 8 方向调整。",
    },
    {
        title: "实时预览",
        description: "实时显示选定区域内容，支持多显示器。",
    },
    {
        title: "缩放功能",
        description: "支持 0.5x - 10x 缩放，鼠标手势缩放。",
    },
    {
        title: "标尺与辅助线",
        description: "可开关的水平/垂直标尺，自定义辅助线。",
    },
    {
        title: "网格显示",
        description: "可自定义颜色和线宽的网格显示。",
    },
    {
        title: "窗口置顶",
        description: "将窗口置顶/取消置顶，方便查看。",
    },
] as const;
