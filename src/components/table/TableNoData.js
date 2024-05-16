// @mui
import PropTypes from 'prop-types';
import {TableCell, TableRow} from '@mui/material';
//
import EmptyContent from '../EmptyContent';

// ----------------------------------------------------------------------

TableNoData.propTypes = {
  isNotFound: PropTypes.bool,
};

export default function TableNoData({ isNotFound }) {
  return (
    <>
      {isNotFound ? (
        <TableRow>
          <TableCell colSpan={9}>
            <EmptyContent
              title="No Data"
              sx={{
                '& span.MuiBox-root': { height: 160 },
              }}
            />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0 }} />
        </TableRow>
      )}
    </>
  );
}
