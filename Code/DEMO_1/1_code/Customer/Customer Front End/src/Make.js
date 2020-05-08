import React from 'react';
import Form from 'react-bootstrap/Form';
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';
import Button from 'react-bootstrap/Form';

const handleResponsive = setNumberOfMonth => {
    let width = document.querySelector('.tp-calendar').clientWidth;
    if (width > 900) {
        setNumberOfMonth(3);
    } else if (width < 900 && width > 580) {
        setNumberOfMonth(2);
    } else if (width < 580) {
        setNumberOfMonth(1);
    }
};

const Day = ({ day }) => {

    return (
        <>
            <p className="date">{day.format('DD')}</p>
            <p className="date">7</p>
        </>
    );
};


function MakeReservation() {
    var onChange = date => console.log(date)
    return (
        <ThemeProvider theme={theme}>
            <DatePicker
                handleChange={onChange}
                selectedDays={['2019-11-06']} //initial selected days
                jalali={false}
                numberOfMonths={3}
                numberOfSelectableDays={3} // number of days you need 
                disabledDays={['2019-12-02']} //disabeld days
                responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
                disabledBeforToday={true}
                disabled={false} // disable calendar 
                dayComponent={Day} //custom day component 


            />
            <Form>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Enter Start Time</Form.Label>
                    <Form.Control type="password" placeholder="00:00" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Enter End Time</Form.Label>
                    <Form.Control type="password" placeholder="00:00" />
                </Form.Group>
                <>
                    <Button as="input" type="submit" value="Make Reservation!" />{' '}
                </>
            </Form>
        </ThemeProvider>

    );
}
export default MakeReservation;