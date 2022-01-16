
#ifndef ELEKTRA_WARNING_HPP
#define ELEKTRA_WARNING_HPP

#include "baseNotification.hpp"

namespace kdb
{
namespace tools
{
namespace errors
{

/* The warning class currently has no extra parts compared to the BaseNotification class,
 * it's used for distiguishing Warnings and Errors by their type and allow to only add Warnings to Errors. */
class Warning : public BaseNotification
{
public:
	/* inherit constructors */
	using BaseNotification::BaseNotification;
	virtual Warning* clone() const = 0;

	/* needed for freeing the elements of the Warning-container in Error-class */
	virtual ~Warning () = default;

protected:
	bool compare(const BaseNotification& other) const override;
};

} // namespace errors
} // namespace tools
} // namespace kdb
#endif // ELEKTRA_WARNING_HPP
