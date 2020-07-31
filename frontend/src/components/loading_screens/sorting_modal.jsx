// Modal loading screen for the auto sort

import React from "react";

export default function AutoSortLoading(){
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">Sorting Tasks</div>
            </div>
            <p></p>
        </div>
    );
}