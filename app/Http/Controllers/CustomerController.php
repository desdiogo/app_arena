<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Response as InertiaResponse;
use App\Actions\Customers\CreateCustomerAction;
use App\Actions\Customers\UpdateCustomerAction;
use App\Actions\Customers\DestroyCustomerAction;
use App\Http\Requests\Customers\CreateOrUpdateCustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return InertiaResponse
     */
    public function index(): InertiaResponse
    {
        return Inertia::render('Customers/Index', [
            'customers' => Customer::orderBy('id')->paginate()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateOrUpdateCustomerRequest $request
     * @return RedirectResponse
     */
    public function store(CreateOrUpdateCustomerRequest $request): RedirectResponse
    {
        return CreateCustomerAction::run($request);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @param Request $request
     * @return InertiaResponse
     */
    public function show(int $id, Request $request): InertiaResponse
    {
        $customer = $request->user()->customer()->findOrFail($id);

        return Inertia::render('Customers/Show', [
            'customer' => $customer,
            'numbers' => $customer->number()->with('preference')->orderBy('id')->paginate(5),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CreateOrUpdateCustomerRequest $request
     * @param int $id
     * @return RedirectResponse
     */
    public function update(CreateOrUpdateCustomerRequest $request, int $id): RedirectResponse
    {
        return UpdateCustomerAction::run($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return RedirectResponse
     */
    public function destroy(int $id): RedirectResponse
    {
        return DestroyCustomerAction::run($id);
    }
}
