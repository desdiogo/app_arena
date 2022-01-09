<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Actions\PreferenceNumbers\UpdatePreferenceNumberAction;

class NumberPreferenceController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(Request $request, int $id): RedirectResponse
    {
        return UpdatePreferenceNumberAction::run($request, $id);
    }
}
