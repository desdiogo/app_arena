<?php

namespace App\Http\Controllers;

use App\Actions\Numbers\CreateNumberAction;
use App\Actions\Numbers\UpdateNumberAction;
use App\Models\Number;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Numbers\CreateOrUpdateNumberRequest;

class NumberController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateOrUpdateNumberRequest $request
     * @return RedirectResponse
     */
    public function store(CreateOrUpdateNumberRequest $request): RedirectResponse
    {
        return CreateNumberAction::run($request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CreateOrUpdateNumberRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(CreateOrUpdateNumberRequest $request, int $id): RedirectResponse
    {
        return UpdateNumberAction::run($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Number  $number
     * @return \Illuminate\Http\Response
     */
    public function destroy(Number $number)
    {
        //
    }
}
