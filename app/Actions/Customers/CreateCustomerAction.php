<?php

namespace App\Actions\Customers;

use App\Traits\RedirectResponseRoute;
use Illuminate\Http\RedirectResponse;
use Lorisleiva\Actions\Concerns\AsAction;
use App\Http\Requests\Customers\CreateOrUpdateCustomerRequest;

class CreateCustomerAction
{
    use AsAction, RedirectResponseRoute;

    /**
     * @param CreateOrUpdateCustomerRequest $request
     * @return RedirectResponse
     */
    public function handle(CreateOrUpdateCustomerRequest $request): RedirectResponse
    {
        $customer = $request->user()->customer()->create($request->all());
        return $this->success('customer.show', ['customer' => $customer->id]);
    }
}
