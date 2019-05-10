<template>
	<div id="app">
		<calendar-view
			:show-date="showDate"
			class="theme-default holiday-us-traditional holiday-us-official"
		>
			<calendar-view-header
				slot="header"
				slot-scope="{ headerProps }"
				:header-props="headerProps"
				@input="setShowDate"
			/>
		</calendar-view>
	</div>
</template>

<script>
import CalendarView from "./components/CalendarView.vue"
import CalendarViewHeader from "./components/CalendarViewHeader.vue"

export default {
	name: "CalendarDemoApp",
	components: {
		CalendarView,
		CalendarViewHeader,
	},
	data: function() {
		return { showDate: new Date() }
	},
	methods: {
		setShowDate(d) {
			this.showDate = d
		},
	},
}
</script>

<style lang="scss">
/*
**************************************************************
This theme is the default shipping theme, it includes some
decent defaults, but is separate from the calendar component
to make it easier for users to implement their own themes w/o
having to override as much.
**************************************************************
*/

/* Header */

.theme-default .cv-header,
.theme-default .cv-header-day {
	background-color: #f0f0f0;
}

.theme-default .cv-header .periodLabel {
	font-size: 1.5em;
}

.theme-default .cv-header button {
	color: #7f7f7f;
}

.theme-default .cv-header button:disabled {
	color: #ccc;
	background-color: #f7f7f7;
}

/* Grid */

.theme-default .cv-day.past {
	background-color: #fafafa;
}

.theme-default .cv-day.outsideOfMonth {
	background-color: #f7f7f7;
}

.theme-default .cv-day.today {
	background-color: #ffe;
}

/* Events */

.theme-default .cv-event {
	border-color: #e0e0f0;
	border-radius: 0.5em;
	background-color: #e7e7ff;
	text-overflow: ellipsis;
}

.theme-default .cv-event.purple {
	background-color: #f0e0ff;
	border-color: #e7d7f7;
}

.theme-default .cv-event.orange {
	background-color: #ffe7d0;
	border-color: #f7e0c7;
}

.theme-default .cv-event.continued::before,
.theme-default .cv-event.toBeContinued::after {
	content: " \21e2 ";
	color: #999;
}

.theme-default .cv-event.toBeContinued {
	border-right-style: none;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.theme-default .cv-event.isHovered.hasUrl {
	text-decoration: underline;
}

.theme-default .cv-event.continued {
	border-left-style: none;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}

/* Event Times */

.theme-default .cv-event .startTime,
.theme-default .cv-event .endTime {
	font-weight: bold;
	color: #666;
}

/* Drag and drop */

.theme-default .cv-day.draghover {
	box-shadow: inset 0 0 0.2em 0.2em yellow;
}

/*
********************************************************************************************************
This theme adds emoji next to the day number for major holidays traditionally celebrated in the USA.

There are two types of holidays: officially-recognized holidays, and traditionally-celebrated ones
(most of the traditionally-celebrated ones are connected with the Christian faith.)

To activate this theme, include the CSS and decorate the calendar instance with the `holidays-us-official`
and/or `holidays-us-traditional` classes.
********************************************************************************************************
*/

/*
****************************************************
Traditional US Holidays
****************************************************
*/

/* Easter: example of a holiday that changes each year. Easy to pre-populate for a reasonable number of years. */
.cv-wrapper.holiday-us-traditional .d2015-04-05 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2016-03-27 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2017-04-16 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2018-04-01 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2019-04-21 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2020-04-12 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2021-04-04 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2022-04-17 .cv-day-number::before {
	content: "\271D";
}

.cv-wrapper.holiday-us-traditional .d2023-04-09 .cv-day-number::before {
	content: "\271D";
}

/* Cinco de Mayo */
.cv-wrapper.holiday-us-traditional .d05-05 .cv-day-number::before {
	content: "\1F1F2\1F1FD";
}

/* Halloween - October 31 */
.cv-wrapper.holiday-us-traditional .d10-31 .cv-day-number::before {
	content: "\1F383";
}

/*
****************************************************
Official US Holidays
****************************************************
*/

/**** Same date every year ****/

/* New Year's Day - January 1 */
.cv-wrapper.holiday-us-official .d01-01 .cv-day-number::before {
	content: "\1F37E";
}

/* Independence Day - July 4 */
.cv-wrapper.holiday-us-official .d07-04 .cv-day-number::before {
	content: "\1F1FA\1F1F8";
}

/* Veteran's Day - November 11 */
.cv-wrapper.holiday-us-official .d11-11 .cv-day-number::before {
	content: "\1F396";
}

/* Christmas Day - December 25 */
.cv-wrapper.holiday-us-official .d12-25 .cv-day-number::before {
	content: "\1F384";
}

/**** Same month position every year ****/

/* Martin Luther King, Jr. Day - 3rd Monday of January */
.cv-wrapper.holiday-us-official.m01 .day.dow1.instance3 .cv-day-number::before {
	content: "\270C\1F3FE";
}

/* Washington's Birthday - 3rd Monday in February */
.cv-wrapper.holiday-us-official.m02 .day.dow1.instance3 .cv-day-number::before {
	content: "\1F34E";
}

/* Memorial Day - last Monday in May */
.cv-wrapper.holiday-us-official.m05 .day.dow1.lastInstance .cv-day-number::before {
	content: "\1F1FA\1F1F8";
}

/* Labor Day - 1st Monday in September */
.cv-wrapper.holiday-us-official.m09 .day.dow1.instance1 .cv-day-number::before {
	content: "\1F4AA";
}

/* Columbus Day - 2nd Monday in October */
.cv-wrapper.holiday-us-official.m10 .day.dow1.instance2 .cv-day-number::before {
	content: "\2388";
}

/* Thanksgiving Day - 4th Thursday of November */
.cv-wrapper.holiday-us-official.m11 .day.dow4.instance4 .cv-day-number::before {
	content: "\1F64F";
}

div#app {
	display: flex;
	height: 87vh;
	width: 87vw;
	margin-left: 6vw;
}
</style>
