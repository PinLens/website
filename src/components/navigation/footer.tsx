"use client";

import Link from 'next/link';
import { AnimationContainer } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { useI18n } from "@/lib/i18n";

const Footer = () => {
    const { t } = useI18n();

    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.product')}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.features')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.pricing')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.integration')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.integrations')}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.facebook')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.instagram')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.twitter')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.linkedin')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.company')}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.aboutUs')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.privacyPolicy')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.terms')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="PINLENS" />
            </div>
        </footer>
    )
}

export default Footer
