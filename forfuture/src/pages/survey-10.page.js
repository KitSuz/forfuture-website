import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SliderComponent from '../components/slider.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey10Page() {

    const items = ["Ja", "Nein"]

    const [value, setValue] = useLocalStorage("sustainabilityeveryday");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    const getNextPath = () => {
        if (value == "Ja") {
            return "/11"
        } else {
            return "/11b"
        }
    }

    return (
        <SurveyFrame number="10/12" question="ACHTEST DU BEWUSST IN DEINEM ALLTAG DARAUF NACHHALTIG (UMWELTFREUNDLICH) ZU SEIN?" prevPath="/09" nextPath={getNextPath()} nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey10Page;