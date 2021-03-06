import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to start and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            setTimeout(() => {
                done();
                expect(countdown.state.count).toBe(9);
            }, 1001)
        });
        it('should never set count less than zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);
            setTimeout(() => {
                done();
                expect(countdown.state.count).toBe(0);
            }, 3001)
        });
        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            setTimeout(() => {
                done();
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
            }, 1001);
        });
        it('should stopped countdown on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            setTimeout(() => {
                done();
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
            }, 1001);
        });
    });
});
