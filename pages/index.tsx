import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
    Container,
    Box,
    Stack,
    HStack,
    ButtonGroup,
    Icon,
    Text,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Em } from "components/typography";
import { FiArrowRight } from "react-icons/fi";
import { GrCompliance } from "react-icons/gr";
import { LuBoxes } from "react-icons/lu";
import { MdHealthAndSafety } from "react-icons/md";
import { TbFreeRights } from "react-icons/tb";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { Br } from "@saas-ui/react";

import { ButtonLink } from "components/button-link/button-link";

import faq from "data/faq";
import pricing from "data/pricing";

const Home: NextPage = () => {
    return (
        <Box>
            <SEO
                title="Saas UI Landingspage"
                description="Free SaaS landingspage starter kit"
            />
            <Box>
                <HeroSection />

                <PricingSection />

                <FaqSection />
            </Box>
        </Box>
    );
};

const HeroSection: React.FC = () => {
    return (
        <Box position="relative" overflow="hidden">
            <BackgroundGradient height="100%" zIndex="-1" />
            <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
                <Stack
                    direction={{ base: "column", lg: "row" }}
                    alignItems="center"
                >
                    <Hero
                        id="home"
                        justifyContent="flex-start"
                        px="0"
                        title={
                            <FallInPlace>
                                Protect your
                                <Br /> private medical data
                            </FallInPlace>
                        }
                        description={
                            <FallInPlace delay={0.4} fontWeight="medium">
                                Anony-med is an <Em>anonymization platform</Em>
                                <Br /> that protects your private data <Br /> by
                                masking sensitive information
                            </FallInPlace>
                        }
                    >
                        <FallInPlace delay={0.8}>
                            <HStack pt="4" pb="12" spacing="8"></HStack>

                            <ButtonGroup spacing={4} alignItems="center">
                                <ButtonLink
                                    colorScheme="primary"
                                    size="lg"
                                    href="/signup"
                                >
                                    Sign Up
                                </ButtonLink>
                                <ButtonLink
                                    size="lg"
                                    href="https://demo.saas-ui.dev"
                                    variant="outline"
                                    rightIcon={
                                        <Icon
                                            as={FiArrowRight}
                                            sx={{
                                                transitionProperty: "common",
                                                transitionDuration: "normal",
                                                ".chakra-button:hover &": {
                                                    transform: "translate(5px)",
                                                },
                                            }}
                                        />
                                    }
                                >
                                    View demo
                                </ButtonLink>
                            </ButtonGroup>
                        </FallInPlace>
                    </Hero>
                    <Box
                        height="600px"
                        position="absolute"
                        display={{ base: "none", lg: "block" }}
                        left={{ lg: "60%", xl: "55%" }}
                        width="80vw"
                        maxW="1100px"
                        margin="0 auto"
                    >
                        <FallInPlace delay={1}>
                            <Box overflow="hidden" height="100%">
                                <Image
                                    src="/static/screenshots/table.png"
                                    layout="fixed"
                                    width={1200}
                                    height={762}
                                    alt="Screenshot of a ListPage in Saas UI Pro"
                                    quality="75"
                                    priority
                                />
                            </Box>
                        </FallInPlace>
                    </Box>
                </Stack>
            </Container>

            <Features
                id="benefits"
                columns={[1, 2, 4]}
                iconSize={4}
                innerWidth="container.xl"
                pt="20"
                features={[
                    {
                        title: "HIPAA Compliant",
                        icon: GrCompliance,
                        description:
                            "Our maskings are follows standards set by HIPAA(Health Insurance Portability and Accountability Act).",
                        iconPosition: "left",
                        delay: 0.6,
                    },
                    {
                        title: "Multiple masking models",
                        icon: LuBoxes,
                        description:
                            "Choose from multiple masking tools to suit your individual needs.",
                        iconPosition: "left",
                        delay: 0.8,
                    },
                    {
                        title: "Security and Safety",
                        icon: MdHealthAndSafety,
                        description:
                            "Your credentials are not stored by us, hence mantaining security and safety.",
                        iconPosition: "left",
                        delay: 1,
                    },
                    {
                        title: "Free Trial",
                        icon: TbFreeRights,
                        description:
                            "Want to test the product? Enroll yourself in a free trial! More details below!",
                        iconPosition: "left",
                        delay: 1.1,
                    },
                ]}
                reveal={FallInPlace}
            />
        </Box>
    );
};

const PricingSection = () => {
    return (
        <Pricing {...pricing}>
            <Text p="8" textAlign="center" color="muted"></Text>
        </Pricing>
    );
};

const FaqSection = () => {
    return <Faq {...faq} />;
};

export default Home;
