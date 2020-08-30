import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadTicketCategories, addBookings, updateBookings, updateTicketAmount, updateTicketNames, updateChecked } from '../../../actions/TicketReservationActions';
import { Container, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BuyTicketsSecondPageDumb from './BuyTicketsSecondPageDumb';
import Booking from '../../../model/Booking';
import { TicketsPerCateory, TicketNames } from '../../../model/UserReserveTicket';
import { TicketAvailabilityData } from '../../../model/BuyTicketsSecondPage';

interface BuyTicketsSecondPageSmartProps {
  match: any,
  fetchedData: {
    isError: boolean,
    isLoading: boolean,
  },
  ticketCategories: TicketAvailabilityData[],
  fetchTicketCategories: (idEvent: string) => void,
  addBookings: (booking: Booking) => void,

  updateBookings: (booking: Booking) => void,
  booking: Booking,

  updateTicketAmount: (ticketAmount: TicketsPerCateory[]) => void,
  // ticketAmount: TicketsPerCateory[],

  updateTicketNames: (ticketAmount: TicketNames[]) => void,
  ticketNames: TicketNames[],

  updateChecked: (checked: boolean) => void,
  checked: boolean,
}

const handleEnterKey = (e: any): void => { e.keyCode === 13 && e.preventDefault(); }

function BuyTicketsSecondPageSmart({ match, fetchedData, ticketCategories, fetchTicketCategories, addBookings,
  booking, updateBookings, updateTicketNames, updateTicketAmount, ticketNames, updateChecked, checked }: BuyTicketsSecondPageSmartProps) {

  const [step, setStep] = useState(1);
  const history = useHistory();

  useEffect(() => {
    fetchTicketCategories(match.params.id)
  }, [match.params.id, fetchTicketCategories])


  useEffect(() => {
    let initialTicketState: TicketsPerCateory[] = [];
    ticketCategories.map((ticket) => initialTicketState.push({ category: ticket.title, quantity: 0 }))
    updateTicketAmount(initialTicketState);
  }, [ticketCategories, updateTicketAmount])

  // Proceed to next step
  const nextStep = () => { setStep(step + 1); };

  // Go back to prev step
  const prevStep = () => { setStep(step - 1); };

  const gotoFirstPage = (): void => {
    history.push(`user/reserve-tickets/first-page/${match.params.id}`);
  }

  const gotoEventListPage = (): void => {
    //TODO redirect to events list
    history.push(`user/events`);
  }

  if (fetchedData.isLoading) {
    return (
      <Container maxWidth="lg">
        <CircularProgress />
      </Container>
    );
  }
  else if (fetchedData.isError) {
    return (
      <h1>An error has occured</h1>
    );
  }

  // console.log("BOOKING ", booking);
  return (
    <div className="wrapper">
      <BuyTicketsSecondPageDumb
        gotoFirstPage={gotoFirstPage}
        gotoEventListPage={gotoEventListPage}
        ticketCategories={ticketCategories}
        eventId={match.params.id}
        booking={booking}

        updateBookings={updateBookings}
        addBookings={addBookings}

        updateTicketNames={updateTicketNames}
        ticketNames={ticketNames}

        updateChecked={updateChecked}
        checked={checked}

        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleEnterKey={handleEnterKey}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    fetchedData: state.ticketCategories,
    booking: state.ticketCategories.booking,
    ticketCategories: state.ticketCategories.ticketCategory,

    ticketNames: state.ticketCategories.ticketNames,
    checked: state.ticketCategories.checked,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTicketCategories: (idEvent: string) => dispatch(loadTicketCategories(idEvent)),
    addBookings: (booking: Booking) => dispatch(addBookings(booking)),

    updateBookings: (booking: Booking) => dispatch(updateBookings(booking)),
    updateTicketAmount: (ticketAmount: TicketsPerCateory[]) => dispatch(updateTicketAmount(ticketAmount)),
    updateTicketNames: (ticketNames: TicketNames[]) => dispatch(updateTicketNames(ticketNames)),
    updateChecked: (checked: boolean) => dispatch(updateChecked(checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketsSecondPageSmart);

//TODO
//internationalizare
