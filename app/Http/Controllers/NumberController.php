<?php

namespace App\Http\Controllers;

use App\Actions\Numbers\CreateNumberAction;
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
     * Display the specified resource.
     *
     * @param  \App\Models\Number  $number
     * @return \Illuminate\Http\Response
     */
    public function show(Number $number)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Number  $number
     * @return \Illuminate\Http\Response
     */
    public function edit(Number $number)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  \App\Models\Number  $number
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Number $number)
    {
        //
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
