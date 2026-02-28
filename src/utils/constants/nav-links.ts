import { HelpCircleIcon, RulerIcon, Maximize2Icon, ZoomInIcon, Grid3X3Icon, PinIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "功能",
        href: "/features",
        menu: [
            {
                title: "区域选择",
                tagline: "灵活拖拽选择任意屏幕区域，支持 8 方向调整。",
                href: "/features/area-selection",
                icon: Maximize2Icon,
            },
            {
                title: "缩放功能",
                tagline: "支持 0.5x - 10x 缩放，鼠标手势缩放。",
                href: "/features/zoom",
                icon: ZoomInIcon,
            },
            {
                title: "标尺与辅助线",
                tagline: "可开关的水平/垂直标尺，自定义辅助线。",
                href: "/features/rulers",
                icon: RulerIcon,
            },
            {
                title: "网格显示",
                tagline: "可自定义颜色和线宽的网格显示。",
                href: "/features/grid",
                icon: Grid3X3Icon,
            },
        ],
    },
    {
        title: "下载",
        href: "#",
    },
    {
        title: "更新日志",
        href: "/changelog",
    },
];
