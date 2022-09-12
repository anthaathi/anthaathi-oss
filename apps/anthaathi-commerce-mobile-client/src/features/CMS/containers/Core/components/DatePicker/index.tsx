import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Divider} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import CMSBottomSheet from "../CMSBottomSheet";

const DatePicker = (props: { title: string }) => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const formatDate = (dateData: Date) => {
        return `${dateData.getDate()}/${
            dateData.getMonth() + 1
        }/${dateData.getFullYear()}`;
    };

    return (
        <View testID="datePicker" style={{marginHorizontal: 10, marginVertical: 5}}>
            <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
                {props.title}
            </Text>

            <Button
                style={{
                    marginVertical: 3,
                    borderColor: '#E3E2E7',
                    backgroundColor: '#fff',
                }}
                contentStyle={{
                    paddingVertical: 5,
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                }}
                labelStyle={{color: '#364A15'}}
                icon="pencil"
                onPress={() => setOpen(true)}
                uppercase={false}
                mode="outlined">
                {formatDate(date)}
            </Button>

            {Platform.OS === "ios" && (
                <CMSBottomSheet
                    bottomSheetTitle={"Select Date"}
                    bottomSheetIconColor="#0A2463"
                    bottomSheetStyle={{
                        backgroundColor: "white",
                    }}
                    bottomSheetTitleStyle={{color: "#0A2463"}}
                    setBottomSheetVisible={setOpen}
                    bottomSheetVisible={open}
                >
                    <View>
                        <Divider/>
                        <DateTimePicker
                            mode="date"
                            display={"spinner"}
                            value={date}
                            onChange={(_e, d) => {
                                const currentDate = d || new Date();
                                setDate(currentDate);
                                setOpen(false);
                            }}
                        />
                        <Divider/>
                    </View>
                    <View
                        style={{flexDirection: "row", justifyContent: "space-between"}}
                    >
                        <TouchableOpacity
                            style={{
                                paddingVertical: 15,
                                alignItems: "center",
                                width: "50%",
                            }}
                            onPress={() => setOpen(!open)}
                        >
                            <Text
                                style={{fontSize: 16, fontWeight: "600", color: "#ff3d33"}}
                            >
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 15,
                                alignItems: "center",
                                width: "50%",
                            }}
                            onPress={() => setOpen(!open)}
                        >
                            <Text
                                style={{fontSize: 16, fontWeight: "600", color: "#017aff"}}
                            >
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CMSBottomSheet>
            )}

            {Platform.OS === "android" && open && (
                <DateTimePicker
                    mode="date"
                    value={date}
                    onChange={(_e, d) => {
                        const currentDate = d || new Date();
                        setDate(currentDate);
                        setOpen(false);
                    }}
                />
            )}
        </View>
    );
};

export default DatePicker;

export const DatePickerCMSInput = {
    _component: CoreComponentType.DatePicker,
    component: DatePicker,
};
