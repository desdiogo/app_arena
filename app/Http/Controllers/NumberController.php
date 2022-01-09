<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Actions\Numbers\CreateNumberAction;
use App\Actions\Numbers\UpdateNumberAction;
use App\Actions\Numbers\DestroyNumberAction;
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
     * @param int $id
     * @param Request $request
     *
     * @return RedirectResponse
     */
    public function destroy(int $id, Request $request): RedirectResponse
    {
        return DestroyNumberAction::run($request, $id);
    }
}
