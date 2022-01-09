import React from "react";
import { Box, createStyles, InputLabel } from "@material-ui/core";

const styles = createStyles({
    label: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 2,
    },
})

export default function LabelBox({
    children,
    focused = false,
    label = '',
    ...others
}) {
    return (
        <>
            {label && (<Box ml={2} mt={-1.5} position="absolute">
                <InputLabel
                    style={styles.label}
                    shrink
                    focused={focused}
                >{label}</InputLabel>
            </Box>)}
            <Box
                border={focused ? 2 : 1}
                borderColor={focused ? 'primary.main' : 'grey.500'}
                borderRadius={4}
                {...others}
            >
                {children}
            </Box>
        </>
    )
}