import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"svg">> = (props) => {
    const color = useColorModeValue("#231f20", "#fff");
    return (
        <chakra.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 24"
            fill={color}
            {...props}
        >
            <path d="M12 2C8.686 2 6 4.686 6 8v4H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-2V8c0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4v4H8V8c0-2.206 1.794-4 4-4zm-6 10h12v8H6v-8zm6 1c-.553 0-1 .447-1 1v2c0 .553.447 1 1 1s1-.447 1-1v-2c0-.553-.447-1-1-1z" />
            <text
                x="30"
                y="18"
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fill={color}
            >
                Anony-med
            </text>
        </chakra.svg>
    );
};
