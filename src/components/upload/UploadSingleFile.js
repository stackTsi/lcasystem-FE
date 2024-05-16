import PropTypes from 'prop-types';
import {useDropzone} from 'react-dropzone';
import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';
import RejectionFiles from './RejectionFiles';
import BlockContent from './BlockContent';
import SingleFilePreview from "./SingleFilePreview";

const DropZoneStyle = styled('div')(({theme}) => ({
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(5, 1),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('padding'),
    backgroundColor: theme.palette.background.neutral,
    border: `1px dashed ${theme.palette.grey[500_32]}`,
    '&:hover': {opacity: 0.72, cursor: 'pointer'},
}));

UploadSingleFile.propTypes = {
    error: PropTypes.bool,
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onRemove: PropTypes.func,
    helperText: PropTypes.node,
    sx: PropTypes.object,
};

export default function UploadSingleFile({error = false, file, onRemove, helperText, sx, ...other}) {
    const {getRootProps, getInputProps, isDragActive, isDragReject, fileRejections} = useDropzone({
        multiple: false,
        ...other,
    });

    return (
        <Box sx={{width: '100%', ...sx}}>
            <DropZoneStyle
                {...getRootProps()}
                sx={{
                    ...(isDragActive && {opacity: 0.72}),
                    ...((isDragReject || error) && {
                        color: 'error.main',
                        borderColor: 'error.light',
                        bgcolor: 'error.lighter',
                    }),
                    ...(file && {
                        padding: '12% 0',
                    }),
                }}
            >
                <input {...getInputProps()} />

                <BlockContent/>
            </DropZoneStyle>

            {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections}/>}

            { file && <SingleFilePreview file={file} onRemove={onRemove} /> }

            {helperText && helperText}
        </Box>
    );
}
