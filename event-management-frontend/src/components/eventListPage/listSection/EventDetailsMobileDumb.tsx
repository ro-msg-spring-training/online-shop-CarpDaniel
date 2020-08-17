import React from 'react';
import {Button} from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {Link} from "react-router-dom";
import MobileEvent from "../../../model/MobileEvent";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import { useStyles } from '../../../styles/CommonStyles';


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        body: {
            fontSize: 14,
            padding: 20,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(even)': {
                backgroundColor: '#F4F5F9',
            },
        },
    }),
)(TableRow);

const EventDetailsMobileDumb = (props: MobileEvent) => {
    const commonClasses = useStyles()

    const id = props.id;
    const title = props.name;
    const date = props.name;

    return (
        <StyledTableRow>
            <StyledTableCell>{title}</StyledTableCell>
            <StyledTableCell>{date}</StyledTableCell>

            <StyledTableCell>
                <Link to={`/events/${id}`} style={{ textDecoration: 'none'}}>
                    <Button className={`${commonClasses.buttonStyle2} ${commonClasses.buttonStyle3}`}>Details</Button>
                </Link><br/><br/>
                <Link to={`/validate/${id}`} style={{ textDecoration: 'none' }}>
                    <Button className={`${commonClasses.buttonStyle2} ${commonClasses.buttonStyle3}`}>Validate</Button>
                </Link>
            </StyledTableCell>
        </StyledTableRow>
    );
}

export default EventDetailsMobileDumb