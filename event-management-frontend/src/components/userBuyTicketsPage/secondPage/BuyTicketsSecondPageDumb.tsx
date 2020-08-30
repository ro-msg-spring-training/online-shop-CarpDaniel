import React from 'react';
import TicketsStep from './steps/ticketsStep/TicketsStepSmart';
import EmailStep from './steps/emailStep/EmailStepSmart';
import NamesStep from './steps/namesStep/NamesStepSmart';
import TermsAndConditionsStep from './steps/termsAndConditionsStep/TermsAndConditionsStepSmart';
import Booking from '../../../model/Booking';
import { Tooltip, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';
import { BuyTicketsSecondPageStyle } from '../../../styles/BuyTicketsSecondPageStyle';
import { TicketNames } from '../../../model/UserReserveTicket';
import { TicketAvailabilityData } from '../../../model/BuyTicketsSecondPage';

interface BuyTicketsSecondPageDumbProps {
  gotoFirstPage: () => void,
  gotoEventListPage: () => void,
  ticketCategories: TicketAvailabilityData[],
  eventId: number | string,
  booking: Booking,
  addBookings: (booking: Booking) => void,
  updateBookings: (booking: Booking) => void,

  updateTicketNames: (ticketAmount: TicketNames[]) => void,
  ticketNames: TicketNames[],

  updateChecked: (checked: boolean) => void,
  checked: boolean,

  step: number,
  nextStep: () => void,
  prevStep: () => void,
  handleEnterKey: (e: any) => void,
}

function BuyTicketsSecondPageDumb({ gotoFirstPage, gotoEventListPage, ticketCategories, eventId, booking, addBookings,
  updateBookings, updateTicketNames, ticketNames, updateChecked, checked,
  step, nextStep, prevStep, handleEnterKey }: BuyTicketsSecondPageDumbProps) {

  const classes = BuyTicketsSecondPageStyle();

  const buttons =
    <>
      <div className={classes.positionLeft}>
        <Tooltip title="Go to first page">
          <IconButton onClick={gotoFirstPage}><NavigateNextIcon fontSize="large" className={classes.prevButtonStyle} /></IconButton>
        </Tooltip>
      </div>

      <div className={classes.positionRight}>
        <Tooltip title="Cancel purchase">
          <IconButton onClick={gotoEventListPage}><CloseIcon fontSize="large" className={classes.cancelButtonStyle} /></IconButton>
        </Tooltip>
      </div>
    </>

  let currentPage = <></>
  switch (step) {
    case 1:
      currentPage =
        <TicketsStep
        nextStep={nextStep}
        handleEnterKey={handleEnterKey}
        ticketCategories={ticketCategories}
        updateTicketNames={updateTicketNames}
        eventId={eventId}
        />
      break;
    case 2:
      currentPage =
        <EmailStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleEnterKey={handleEnterKey}
          email={booking.email}
          updateBookings={updateBookings}
          booking={booking}
        />
      break;
    case 3:
      currentPage =
        <NamesStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleEnterKey={handleEnterKey}
          ticketNames={ticketNames}
          updateTicketNames={updateTicketNames}
        />
      break;
    case 4:
      currentPage =
        <TermsAndConditionsStep
          prevStep={prevStep}
          checked={checked}
          booking={booking}
          updateBookings={updateBookings}
          ticketNames={ticketNames}
          updateChecked={updateChecked}
          addBookings={addBookings}
        />
      break;
    default:
      (console.log('Wrong step'))
  }

  return (
    <>
      {currentPage}
      {buttons}
    </>
  );
}

export default BuyTicketsSecondPageDumb;
