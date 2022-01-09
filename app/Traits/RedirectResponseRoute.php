<?php

namespace App\Traits;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

trait RedirectResponseRoute
{
    /**
     * General success response message
     *
     * @var string
     */
    protected string $successMessage = 'Procedure performed successfully!';

    /**
     * General error response message
     *
     * @var string
     */
    protected string $errorMessage = 'Oops! There was some internal error.';

    /**
     * Generate response with successfully
     *
     * @param string $route
     * @param string|null $message
     * @param array|null $parameters
     *
     * @return RedirectResponse
     */
    protected function success(string $route,  ?array $parameters = null, ?string $message = null): RedirectResponse
    {
        return Redirect::route($route, $parameters)->with('success', $message ?? $this->successMessage);
    }

    /**
     * Generate response with error
     *
     * @param string $route
     * @param string|null $message
     * @param array|null $parameters
     *
     * @return RedirectResponse
     */
    protected function error(string $route, array $parameters = null, ?string $message = null): RedirectResponse
    {
        return Redirect::route($route, $parameters)->with('error', $message ?? $this->errorMessage);
    }

    /**
     * Get success message
     *
     * @return string
     */
    protected function getSuccessMessage(): string
    {
        return $this->successMessage;
    }

    /**
     * Get error message
     *
     * @return string
     */
    protected function getErrorMessage(): string
    {
        return $this->errorMessage;
    }
}
