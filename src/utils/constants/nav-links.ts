import { HelpCircleIcon, RulerIcon, Maximize2Icon, ZoomInIcon, Grid3X3Icon, PinIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export const NAV_LINKS = (locale: Locale) => [
    {
        title: locale === 'zh' ? "功能" : "Features",
        href: "/features",
        menu: [
            {
                title: locale === 'zh' ? "区域选择" : "Area Selection",
                tagline: locale === 'zh' ? "灵活拖拽选择任意屏幕区域，支持 8 方向调整。" : "Flexible drag selection of any screen area with 8-direction adjustment.",
                href: "/features/area-selection",
                icon: Maximize2Icon,
            },
            {
                title: locale === 'zh' ? "缩放功能" : "Zoom",
                tagline: locale === 'zh' ? "支持 0.5x - 10x 缩放，鼠标手势缩放。" : "Supports 0.5x - 10x zoom, mouse gesture zoom.",
                href: "/features/zoom",
                icon: ZoomInIcon,
            },
            {
                title: locale === 'zh' ? "标尺与辅助线" : "Rulers & Guides",
                tagline: locale === 'zh' ? "可开关的水平/垂直标尺，自定义辅助线。" : "Toggleable horizontal/vertical rulers, custom guides.",
                href: "/features/rulers",
                icon: RulerIcon,
            },
            {
                title: locale === 'zh' ? "网格显示" : "Grid Display",
                tagline: locale === 'zh' ? "可自定义颜色和线宽的网格显示。" : "Customizable color and line width grid display.",
                href: "/features/grid",
                icon: Grid3X3Icon,
            },
        ],
    },
    {
        title: locale === 'zh' ? "下载" : "Download",
        href: "#",
    },
    {
        title: locale === 'zh' ? "更新日志" : "Changelog",
        href: "/changelog",
    },
];
