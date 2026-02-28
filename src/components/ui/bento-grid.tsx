import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import { ArrowRightIcon, Maximize2Icon, RulerIcon, Grid3X3Icon, PinIcon, ZoomInIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";

export const CARDS = [
    {
        Icon: Maximize2Icon,
        name: "区域选择与实时预览",
        description: "灵活拖拽选择任意屏幕区域，支持 8 方向调整大小和移动，实时显示选定区域内容。",
        href: "#",
        cta: "了解更多",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
                <CardHeader>
                    <CardTitle>
                        区域选择
                    </CardTitle>
                    <CardDescription>
                        灵活拖拽选择任意屏幕区域
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label>
                        屏幕捕获
                    </Label>
                    <Input
                        type="text"
                        placeholder="选择屏幕区域..."
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: ZoomInIcon,
        name: "缩放与导航",
        description: "支持 0.5x - 10x 缩放，鼠标手势缩放，实时显示缩放级别和视口位置。",
        href: "#",
        cta: "了解更多",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Card className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <CardHeader>
                    <CardTitle>
                        缩放控制
                    </CardTitle>
                    <CardDescription>
                        0.5x - 10x 无级缩放
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-muted rounded-md">1x</div>
                        <div className="px-4 py-2 bg-primary/10 rounded-md">2x</div>
                        <div className="px-4 py-2 bg-muted rounded-md">5x</div>
                        <div className="px-4 py-2 bg-muted rounded-md">10x</div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: RulerIcon,
        name: "设计辅助工具",
        description: "可开关的水平/垂直标尺，自定义辅助线，辅助线位置调整和删除。",
        href: "#",
        cta: "了解更多",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Card className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
                <CardHeader>
                    <CardTitle>
                        标尺与辅助线
                    </CardTitle>
                    <CardDescription>
                        专业的设计辅助工具
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-primary/10 rounded-md">📐 标尺</div>
                        <div className="px-4 py-2 bg-muted rounded-md">📏 辅助线</div>
                        <div className="px-4 py-2 bg-muted rounded-md">🎨 颜色</div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: PinIcon,
        name: "便捷操作",
        description: "轻量级菜单栏应用，快捷键快速启动，ESC 键快速关闭选择覆盖层。",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "了解更多",
        background: (
            <Card className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <CardHeader>
                    <CardTitle>
                        快捷操作
                    </CardTitle>
                    <CardDescription>
                        高效的工作流程
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="space-y-2">
                        <div className="px-3 py-1 bg-muted rounded text-sm">Cmd+Ctrl+P</div>
                        <div className="px-3 py-1 bg-muted rounded text-sm">ESC 关闭</div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
